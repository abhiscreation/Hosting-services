 import React, { useState, useRef } from "react";
import './PDFModal.css';

function PDFEditorModal({ onClose }) {
  // Modal states
  const [status, setStatus] = useState("idle"); // idle, loading, ready
  const [file, setFile] = useState(null);
  const [pdfName, setPdfName] = useState("");
  const [error, setError] = useState("");
  const [html, setHtml] = useState("<p>Preview will show the first page of your PDF here…</p>");
  const previewRef = useRef(null);

  const onPick = (e) => {
    let selectedFile;
    if (e.target.files && e.target.files[0]) {
      selectedFile = e.target.files[0];
    } else if (e.dataTransfer && e.dataTransfer.files[0]) {
      selectedFile = e.dataTransfer.files[0];
    }
    if (!selectedFile) return;
    if (!selectedFile.name.endsWith(".pdf")) {
      setError("Only .pdf files are allowed!");
      return;
    }
    setFile(selectedFile);
    setPdfName(selectedFile.name);
    setStatus("loading");
    setError("");
    // Simulate loading
    setTimeout(() => {
      setStatus("ready");
      setHtml(`<p>PDF "${selectedFile.name}" loaded for editing.</p>`);
    }, 1500);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    onPick(e);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Dummy "edit" feature
  const fakeEdit = () => {
    alert("PDF Edited (simulate)");
  };

  return (
    <>
      <div className="pdf-backdrop" onClick={onClose} />
      <div className="pdf-modal-wrap" onClick={onClose}>
        <div
          className={`pdf-modal ${status === 'ready' ? 'pdf--ready' : status === 'loading' ? 'pdf--work' : 'pdf--idle'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="pdf-head">
            <div className="pdf-title">PDF Editor</div>
            <button className="pdf-close" onClick={onClose}>×</button>
          </div>
          <div className="pdf-body" onDrop={handleDrop} onDragOver={handleDragOver}>
            <div className="pdf-zone">
              {status === 'idle' ? (
                <div className="pdf-empty">
                  <p>Drag & drop a .pdf file here</p>
                  <label className="pdf-choose">
                    Choose PDF
                    <input type="file" accept=".pdf" style={{display:"none"}} onChange={onPick} />
                  </label>
                </div>
              ) : (
                <div id="pdf-preview" ref={previewRef} dangerouslySetInnerHTML={{ __html: html }} />
              )}
            </div>
            {status !== 'idle' && (
              <aside className="pdf-side">
                <div className="pdf-name">{pdfName}</div>
                {status === 'loading' && (
                  <>
                    <div className="pdf-status">Loading…</div>
                    <div className="pdf-prog"><span /></div>
                  </>
                )}
                {status === 'ready' && (
                  <>
                    <div className="pdf-status">Ready to edit</div>
                    <button className="pdf-cta" onClick={fakeEdit}>Edit PDF</button>
                  </>
                )}
                {error && <div style={{ color: '#ff8a80' }}>{error}</div>}
                <small className="pdf-tip">Tip: This is a preview. Actual PDF page content will show here after integration.</small>
              </aside>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PDFEditorModal;
