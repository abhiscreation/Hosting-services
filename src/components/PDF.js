import React, { useState } from "react";
import { jsPDF } from "jspdf";

const PDF = () => {
  const [text, setText] = useState("");

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(text, 10, 10);
    doc.save("document.pdf");
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center", color: "#fff" }}>
      <h2>Word to PDF (Text Only)</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="10"
        cols="50"
        placeholder="Paste your text here"
        style={{ padding: "10px", marginBottom: "20px" }}
      />
      <br />
      <button
        onClick={generatePDF}
        style={{
          padding: "10px 20px",
          background: "#00e5ff",
          border: "none",
          borderRadius: "8px",
          color: "#000",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Generate PDF
      </button>
    </div>
  );
};

export default PDF;
