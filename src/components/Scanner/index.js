import React, { useEffect, useRef } from "react";

//import QRReader from "./qrscan";


import LayoutContent from "./layout-content";
import SelectPhotos from "./select-photos";

/*window.iOS = ["iPad", "iPhone", "iPod"].indexOf(navigator.platform) >= 0;
window.isMediaStreamAPISupported =
  navigator &&
  navigator.mediaDevices &&
  "enumerateDevices" in navigator.mediaDevices;
window.noCameraPermission = false;*/

const Scanner = () => {
    //let canvasRef = useRef(null);
    
  /*useEffect(() => {
    QRReader.init(); // init scanner
    QRReader.ctx = canvasRef.current.getContext("2d")
  }, []);*/

  return (
    <>
      <LayoutContent />
      <canvas
        width={window.innerWidth}
        height={window.innerHeight}
        onClick={(e) => alert(e.clientX)}
      />
      <SelectPhotos />
    </>
  );
};

export default Scanner;
