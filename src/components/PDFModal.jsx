import React from "react";
import "./WordToPDFModal.css";

function PDFModal({ onClose }) {
  return (
    <>
      <div className="w2p-backdrop" onClick={onClose} />
      <div className="w2p-modal-wrap">
        <div className="w2p-modal">
          <div className="w2p-head">
            <div className="w2p-title">PDF Editor</div>
            <button className="w2p-close" onClick={onClose} aria-label="Close modal">
              ×
            </button>
          </div>
          <div className="w2p-body">
            <p>PDF Editor functionality coming soon...</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PDFModal;