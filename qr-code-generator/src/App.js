import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { toPng } from "html-to-image";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const qrRef = useRef(null);

  // Function to Download QR Code
  const downloadQRCode = () => {
    if (!text) return;
    toPng(qrRef.current)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "qr-code.png";
        link.click();
      })
      .catch((err) => console.error("Error generating QR code image:", err));
  };

  return (
    <div className="app">
      <h2>QR Code Generator</h2>
      <input
        type="text"
        placeholder="Enter text or URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="qr-container" ref={qrRef}>
        {text && (
          <QRCodeCanvas
            value={text}
            size={200}
            bgColor="#ffffff"
            fgColor="#007bff"
            level="H"
          />
        )}
      </div>
      <button onClick={downloadQRCode} disabled={!text}>
        Download QR Code
      </button>
    </div>
  );
}

export default App;