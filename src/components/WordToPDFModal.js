import React, { useState, useRef, useEffect } from "react";
import "./WordToPDFModal.css";

function WordToPDFModal({ onClose }) {
  const [status, setStatus] = useState("idle");
  const [file, setFile] = useState(null);
  const [docxName, setDocxName] = useState("");
  const [error, setError] = useState("");
  const [html, setHtml] = useState("<p>Preview coming soon…</p>");
  const previewRef = useRef(null);

  const onPick = (e) => {
    let selectedFile;
    if (e.target.files && e.target.files[0]) {
      selectedFile = e.target.files[0];
    } else if (e.dataTransfer && e.dataTransfer.files[0]) {
      selectedFile = e.dataTransfer.files[0];
    }
    if (!selectedFile) {
      setError("No file selected!");
      return;
    }
    if (!selectedFile.name.endsWith(".docx")) {
      setError("Only .docx files are allowed!");
      return;
    }
    setFile(selectedFile);
    setDocxName(selectedFile.name);
    setStatus("converting");
    setError("");
    // Simulate conversion (replace with actual DOCX parsing if needed)
    setTimeout(() => {
      setStatus("ready");
      setHtml(`<p>File "${selectedFile.name}" converted successfully.</p>`);
    }, 1800);
  };

  const download = () => {
    // Simulate PDF download (replace with actual PDF generation)
    alert("Downloading PDF: " + docxName);
    setStatus("idle");
    setFile(null);
    setDocxName("");
    setHtml("<p>Preview coming soon…</p>");
    onClose(); // Close modal after download
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onPick(e);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <>
      <div className="w2p-backdrop" onClick={onClose} />
      <div className="w2p-modal-wrap">
        <div
          className={`w2p-modal ${status === "ready" ? "w2p--ready" : status === "converting" ? "w2p--work" : "w2p--idle"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w2p-head">
            <div className="w2p-title">Word to PDF</div>
            <button className="w2p-close" onClick={onClose} aria-label="Close modal">
              ×
            </button>
          </div>
          <div className="w2p-body" onDrop={handleDrop} onDragOver={handleDragOver}>
            <div className="w2p-zone">
              {status === "idle" ? (
                <div className="w2p-empty">
                  <p>Drag & drop a .docx file here</p>
                  <label className="w2p-choose">
                    Choose .docx
                    <input
                      type="file"
                      accept=".docx"
                      style={{ display: "none" }}
                      onChange={onPick}
                    />
                  </label>
                </div>
              ) : (
                <div id="w2p-preview" ref={previewRef} dangerouslySetInnerHTML={{ __html: html }} />
              )}
            </div>
            {status !== "idle" && (
              <aside className="w2p-side">
                <div className="w2p-name">{docxName}</div>
                {status === "converting" && (
                  <>
                    <div className="w2p-status">Converting…</div>
                    <div className="w2p-prog">
                      <span />
                    </div>
                  </>
                )}
                {status === "ready" && (
                  <>
                    <div className="w2p-status">Conversion completed</div>
                    <button className="w2p-cta" onClick={download}>
                      Download PDF
                    </button>
                  </>
                )}
                {error && <div style={{ color: "#ff8a80" }}>{error}</div>}
                <small className="w2p-tip">
                  Tip: For best results, use simple styles in your DOCX.
                </small>
              </aside>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default WordToPDFModal;