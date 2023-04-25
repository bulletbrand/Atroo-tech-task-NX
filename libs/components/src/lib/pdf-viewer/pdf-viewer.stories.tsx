import { Story, Meta } from '@storybook/react';
import { PdfViewer, IPdfViewerProps } from './pdf-viewer';
import singlePdf from '../assets/pdf/lyvyMarketSegment.pdf';
import multiplyPdf from '../assets/pdf/StatementOfReturn.pdf';

export default {
  component: PdfViewer,
  title: 'Pdf Viewer',
} as Meta;

type ContainerSize = {
  width: string;
  height: string
}

type PdfViewerPropsWithContainerWidth = IPdfViewerProps & {
  containerSize?: Partial<ContainerSize>
};

const Template: Story<IPdfViewerProps> = (args) => <PdfViewer {...args} />;

const TemplateWrapped: Story<PdfViewerPropsWithContainerWidth> = (args) => {
  return (
    <div style={{ ...args.containerSize, margin: 'auto' }}>
      <PdfViewer filePath={args.filePath} />
    </div>
  );
};

export const SinglePDF = Template.bind({});

SinglePDF.args = {
  filePath: singlePdf,
};

export const MultiplyPDF = Template.bind({});

MultiplyPDF.args = {
  filePath: multiplyPdf,
};

export const WrongFormatPDF = Template.bind({});

WrongFormatPDF.args = {
  filePath: 'some wrong path',
};

export const SinglePDFInContainer = TemplateWrapped.bind({});

SinglePDFInContainer.args = {
  filePath: singlePdf,
  containerSize: {
    width: '450px',
  }
};

export const MultiplyPDFInContainer = TemplateWrapped.bind({});

MultiplyPDFInContainer.args = {
  filePath: multiplyPdf,
  containerSize: {
    width: '450px',
    height: '450px',
  }
};
