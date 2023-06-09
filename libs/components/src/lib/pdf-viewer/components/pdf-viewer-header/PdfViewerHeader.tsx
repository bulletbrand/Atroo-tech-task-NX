import React from 'react';
import { HEADER_TEXTS } from './texts';
import {
  PdfViewerLoading,
} from '../index';
import styles from './PdfViewerHeader.module.scss';

interface IPdfViewerHeaderProps {
  filePath: string;
  renderTime: number | null;
}

const getRenderTimeMs = (time: IPdfViewerHeaderProps['renderTime']) => {
  return time ? `${time.toFixed()}ms` : <PdfViewerLoading size={'sm'}/>;
};

export const PdfViewerHeader = ({
  filePath,
  renderTime,
}: IPdfViewerHeaderProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.infoSection}>
        <h3 className={styles.title}>{HEADER_TEXTS.LOADED_URL}</h3>
        <span className={styles.loadedUrlText}>{filePath}</span>
      </div>
      <div className={styles.infoSection}>
        <h3 className={styles.title}>{HEADER_TEXTS.RENDER_TIME}</h3>
        <span className={styles.renderTimeText}>
          {getRenderTimeMs(renderTime)}
        </span>
      </div>
    </div>
  );
};
