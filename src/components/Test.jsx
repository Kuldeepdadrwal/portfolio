import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import dsaPdf from "../assets/certificates/dsa.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="flex flex-col items-center">
      <Document file={dsaPdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={1} width={420} />
      </Document>

      <p className="mt-2 text-sm text-gray-400">
        Page 1 of {numPages}
      </p>
    </div>
  );
};

export default PdfViewer;
