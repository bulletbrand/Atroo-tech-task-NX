import React, { useRef, useState } from 'react';
import { Document, pdfjs } from 'react-pdf';
import { usePinch } from '@use-gesture/react';
import {
  PdfViewerError,
  PdfViewerHeader,
  PdfViewerLoading,
  PdfViewerZoomButtons,
  PdfViewerPage,
} from './components';
import { useMeasureRenderTime } from './hooks/useMeasureRenderTime';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import styles from './pdf-viewer.module.scss';
import { getPagesFromNumber } from './utils/common';
import { useResize } from './hooks/useResize';
import {
  INITIAL_SCALE,
  MAX_ZOOM,
  MIN_ZOOM,
  RESIZE_RECALCULATE_TIME,
  ZOOM_INTERVAL,
} from './constants/common';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export interface IPdfViewerProps {
  filePath: string;
}

export function PdfViewer({ filePath }: IPdfViewerProps) {
  const [pages, setPages] = useState<number[]>([]);
  const [scale, setScale] = useState(INITIAL_SCALE);

  const documentContainerRef = useRef<HTMLDivElement | null>(null);

  const pdfPageWidth = useResize(documentContainerRef, RESIZE_RECALCULATE_TIME);
  const { renderTime, updateRenderTime } = useMeasureRenderTime();

  const onDocumentLoadSuccess = ({ numPages }: pdfjs.PDFDocumentProxy) => {
    updateRenderTime();
    setPages(getPagesFromNumber(numPages));
  };

  usePinch(
    ({ offset: [pinchScale] }) => {
      setScale(pinchScale);
    },
    {
      target: documentContainerRef,
      scaleBounds: { min: MIN_ZOOM, max: MAX_ZOOM },
    }
  );

  const zoomIn = () => setScale((scale) => scale + ZOOM_INTERVAL);

  const zoomOut = () => {
    setScale((scale) =>
      scale - ZOOM_INTERVAL > INITIAL_SCALE
        ? scale - ZOOM_INTERVAL
        : INITIAL_SCALE
    );
  };

  return (
    <div className={styles.wrapper}>
      <PdfViewerHeader filePath={filePath} renderTime={renderTime} />
      <PdfViewerZoomButtons onZoomIn={zoomIn} onZoomOut={zoomOut} />
      <div className={styles.documentContainer} ref={documentContainerRef}>
        <Document
          loading={<PdfViewerLoading />}
          className={styles.document}
          file={filePath}
          error={<PdfViewerError />}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {pages.map((page) => (
            <PdfViewerPage
              key={page}
              pageNumber={page}
              scale={scale}
              pdfPageWidth={pdfPageWidth}
            />
          ))}
        </Document>
      </div>
    </div>
  );
}

export default PdfViewer;
