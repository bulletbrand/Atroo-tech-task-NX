import React from 'react';
import { Page, PageProps } from 'react-pdf';
import styles from './PdfViewerPage.module.scss';

interface IPdfViewerPageProps {
  pdfPageWidth: number;
  scale: number;
  pageNumber: number;
  renderMode?: PageProps['renderMode'];
}

export const PdfViewerPage = ({
  pdfPageWidth,
  scale,
  renderMode = 'svg',
  pageNumber,
}: IPdfViewerPageProps) => {
  return (
    <Page
      width={pdfPageWidth}
      scale={scale}
      className={styles.page}
      renderMode={renderMode}
      pageNumber={pageNumber}
      renderAnnotationLayer={false}
      renderTextLayer={false}
    />
  );
};
