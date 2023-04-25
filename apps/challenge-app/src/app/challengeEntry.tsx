import { PdfViewer } from '@monorepo/components';
import lyvyMarketSegment from '../assets/pdf/lyvyMarketSegment.pdf';
import StatementOfReturn from '../assets/pdf/StatementOfReturn.pdf';
import styles from './app.module.scss';

export const ChallengeEntry = () => {
  return (
    <div className={styles.challengeEntryContainer}>
      <PdfViewer filePath={StatementOfReturn} />
    </div>
  );
};
