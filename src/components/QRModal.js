  import React, { useState, useRef, useEffect, useCallback } from "react";
  import { QRCodeCanvas } from "qrcode.react";
  import "./QRModal.css";

  function QRCodeModal({ onClose }) {
    const [status, setStatus] = useState("idle"); // idle | converting | ready
    const [text, setText] = useState("");
    const [error, setError] = useState("");
    const [fileName, setFileName] = useState("qrcode");
    const canvasRef = useRef(null);

    // Close on ESC
    useEffect(() => {
      const onKey = (e) => e.key === "Escape" && onClose();
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);

    // Generate QR (simulated work state for UX parity)
    const handleGenerate = useCallback(() => {
      if (!text.trim()) {
        setError("Enter text or URL to generate a QR code.");
        return;
      }
      setError("");
      setStatus("converting");
      setTimeout(() => setStatus("ready"), 700);
    }, [text]);

    const download = useCallback(() => {
      const canvas = canvasRef.current?.querySelector("canvas");
      if (!canvas) return;
      const url = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = url;
      link.download = `${fileName || "qrcode"}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      onClose(); // Close modal after download
    }, [fileName, onClose]);

    const stop = (e) => e.stopPropagation();

    return (
      <>
        <div className="w2p-backdrop" onClick={onClose} />
        <div className="w2p-modal-wrap" onClick={onClose}>
          <div
            className={`w2p-modal ${
              status === "ready" ? "w2p--ready" : status === "converting" ? "w2p--work" : "w2p--idle"
            }`}
            onClick={stop}
          >
            {/* Header */}
            <div className="w2p-head">
              <div className="w2p-title">QR Code Generator</div>
              <button className="w2p-close" onClick={onClose} aria-label="Close modal">
                ×
              </button>
            </div>

            {/* Body */}
            <div className="w2p-body">
              {/* Left zone: input + preview */}
              <div className="w2p-zone">
                {status === "idle" || status === "converting" ? (
                  <div className="w2p-empty" style={{ padding: 0 }}>
                    <div style={{ padding: "1rem" }}>
                      <p style={{ marginBottom: 10 }}>
                        Enter text or URL to generate a QR code
                      </p>
                      <input
                        type="text"
                        placeholder="https://example.com or any text…"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className={`w2p-input w2p-input-primary ${error ? "is-error" : ""}`}
                      />
                      <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
                        <input
                          type="text"
                          placeholder="File name (optional)"
                          value={fileName}
                          onChange={(e) => setFileName(e.target.value)}
                          className="w2p-input"
                        />
                        <button
                          className="w2p-choose"
                          onClick={handleGenerate}
                          type="button"
                        >
                          Generate
                        </button>
                      </div>
                      {error && (
                        <div style={{ color: "#ff8a80", marginTop: 8 }}>{error}</div>
                      )}
                    </div>

                    {status === "converting" && (
                      <div style={{ width: "100%", padding: "0 1rem 1rem" }}>
                        <div className="w2p-status">Generating…</div>
                        <div className="w2p-prog">
                          <span />
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  // Preview like the white “paper” in Word modal
                  <div id="w2p-preview" ref={canvasRef}>
                    <div className="qr-preview-box">
                      <QRCodeCanvas
                        value={text}
                        size={288}
                        level="M"
                        includeMargin={true}
                        bgColor="#ffffff"
                        fgColor="#000000"
                      />
                    </div>
                    <div style={{ marginTop: 10, color: "#222" }}>
                      <strong>Data:</strong> {text}
                    </div>
                  </div>
                )}
              </div>

              {/* Right panel */}
              {status !== "idle" && (
                <aside className="w2p-side">
                  <div className="w2p-name">{fileName || "qrcode"}.png</div>

                  {status === "converting" && (
                    <>
                      <div className="w2p-status">Generating…</div>
                      <div className="w2p-prog">
                        <span />
                      </div>
                    </>
                  )}

                  {status === "ready" && (
                    <>
                      <div className="w2p-status">QR code ready</div>
                      <button className="w2p-cta" onClick={download}>
                        Download PNG
                      </button>
                    </>
                  )}

                  <small className="w2p-tip">
                    Tip: Keep URLs short for best scan reliability.
                  </small>
                </aside>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }

  export default QRCodeModal;