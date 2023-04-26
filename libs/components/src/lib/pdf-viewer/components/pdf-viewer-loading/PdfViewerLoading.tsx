import React from 'react';
import styles from './PdfViewerLoading.module.scss';

interface IPdfViewerLoadingProp  {
  position?: 'start' | 'center'
  size?: 'sm' | 'md'
}

export const PdfViewerLoading = ({position='center', size='md'}: IPdfViewerLoadingProp) => {
  return (
    <div className={`${styles.wrapper} ${position}`}>
      <div className={`${styles.loading} ${size}`} />
    </div>
  );
};
