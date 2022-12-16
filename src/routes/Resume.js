import React, {useState} from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

function Resume() {
  
  const [numPage, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPage);
    setPageNumber(1);
  }

  return (
    <div className="Resume">
      <header className="Resume-header">
        <Document file="/Kalpi.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page height="600" pageNumber={pageNumber}/>
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </header>
    </div>
  );
}

export default Resume;