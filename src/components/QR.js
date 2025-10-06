import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QR = () => {
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "2rem", textAlign: "center", color: "#fff" }}>
      <h2>QR Code Generator</h2>
      <input
        type="text"
        value={text}
        placeholder="Enter text / URL"
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "10px", width: "300px", margin: "20px 0" }}
      />
      <div style={{ marginTop: "20px" }}>
        {text && <QRCodeCanvas value={text} size={256} />}
      </div>
    </div>
  );
};

export default QR;
