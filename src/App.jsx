import React from "react";

const App = () => {
  return (
    <iframe
      src="https://embedsports.top/embed/echo/ppv-event-01-early-prelims-ufc-322-ppv-01/1#player=clappr#autoplay=true"
      title="UFC 322 PPV"
      frameBorder="0"
      allow="autoplay; fullscreen"
      allowFullScreen
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 9999,
        border: "none",
      }}
    />
  );
};

export default App;
