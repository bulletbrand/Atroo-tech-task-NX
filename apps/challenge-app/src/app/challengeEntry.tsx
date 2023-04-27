import { PdfViewer } from '@monorepo/components';
import StatementOfReturnPdfDoc from '../assets/pdf/StatementOfReturn.pdf';
import styles from './app.module.scss';

export const ChallengeEntry = () => {
  return (
    <div className={styles.challengeEntryContainer}>
      <PdfViewer filePath={StatementOfReturnPdfDoc} />
    </div>
  );
};
