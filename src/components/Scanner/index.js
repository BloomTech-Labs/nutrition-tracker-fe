import React, { useEffect, useRef } from "react";
import decoderFile from "./decoder.js";

//import QRReader from "./qrscan";

import LayoutContent from "./layout-content";
import SelectPhotos from "./select-photos";

window.iOS = ["iPad", "iPhone", "iPod"].indexOf(navigator.platform) >= 0;
window.isMediaStreamAPISupported =
  navigator &&
  navigator.mediaDevices &&
  "enumerateDevices" in navigator.mediaDevices;
window.noCameraPermission = false;

// helps us set up our web worker, which we'll use to communicate with the compiled decoder file
// https://github.com/fullstackio/awesome-fullstack-tutorials/blob/master/react/guide-to-web-workers-in-react/react-worker/src/worker.js
class WebWorker {
    constructor(worker) {
      const code = worker.toString();
      const blob = new Blob(["(" + code + ")()"]);
      return new Worker(URL.createObjectURL(blob));
    }
  }

const Scanner = () => {
  window.isMediaStreamAPISupported =
    navigator &&
    navigator.mediaDevices &&
    "enumerateDevices" in navigator.mediaDevices;
  let canvasRef = useRef(null);
  let webcamRef = useRef(null);
  let forSelectedPhotos = false;
  let streaming = false;
  let QRActive = false;
  let canvas = null,
        ctx = null;
  const decoder = new WebWorker(decoderFile);


  function showErrorMsg() {
    window.noCameraPermission = true;
    alert("Unable to access the camera");
  }

  function startCapture(constraints) {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function(stream) {
        webcamRef.current.srcObject = stream;
        //webcamRef.current.setAttribute("controls", true);
        console.log("heyo", webcamRef.current);
        webcamRef.current.setAttribute("playsinline", true);
        webcamRef.current.setAttribute("autoplay", true);
        /*setTimeout(() => {
          webcamRef.current.removeAttribute("controls");
        });*/ // Trying to figure out why we need this removeAttributes...
      })
      .catch(function(err) {
        console.log("Error occurred ", err);
        showErrorMsg();
      });
  }

  if (window.isMediaStreamAPISupported) {
    navigator.mediaDevices
      .enumerateDevices()
      .then(function(devices) {
        let device = devices.filter(function(device) {
          let deviceLabel = device.label.split(",")[1];
          if (device.kind == "videoinput") {
            return device;
          }
        });

        let constraints;
        if (device.length > 1) {
          constraints = {
            video: {
              mandatory: {
                sourceId: device[1].deviceId ? device[1].deviceId : null
              }
            },
            audio: false
          };

          if (window.iOS) {
            constraints.video.facingMode = "environment";
          }
          startCapture(constraints);
        } else if (device.length) {
          constraints = {
            video: {
              mandatory: {
                sourceId: device[0].deviceId ? device[0].deviceId : null
              }
            },
            audio: false
          };

          if (window.iOS) {
            constraints.video.facingMode = "environment";
          }

          startCapture(constraints);
        } else {
          startCapture({ video: true });
        }
      })
      .catch(function(error) {
        showErrorMsg();
        console.error("Error occurred : ", error);
      });
  }

  const scan = (callback, forSelectedPhotos) => {
    QRActive = true;

    function onDecoderMessage(event) {
      if (event.data.length > 0) {
        var qrid = event.data[0][2];
        QRActive = false;
        callback(qrid);
      }
      setTimeout(newDecoderFrame, 0);
    }

    decoder.onmessage = onDecoderMessage;

    /*setTimeout(() => {
      setPhotoSourceToScan(forSelectedPhotos);
    });*/ // !!! FIX !!!!

    // Start QR-decoder
    function newDecoderFrame() {
      if (!QRActive) return;
      try {
        ctx.drawImage(
          webcamRef,
          0,
          0,
          canvas.width,
          canvas.height
        );
        console.log("!!!! hey");
        var imgData = ctx.getImageData(
          0,
          0,
          canvas.width,
          canvas.height
        );

        if (imgData.data) {
          decoder.postMessage(imgData);
        }
      } catch (e) {
        // Try-Catch to circumvent Firefox Bug #879717
        if (e.name == "NS_ERROR_NOT_AVAILABLE") setTimeout(newDecoderFrame, 0);
      }
    }
    newDecoderFrame();
  };

  /*useEffect(() => {
    QRReader.init(); // init scanner
    QRReader.ctx = canvasRef.current.getContext("2d")
  }, []);*/

  return (
    <>
      <div className="app-layout-content">
        {/* Original code use querySelectors but since we're using React, we'll use ref to  emulate the behavior */}
        {window.isMediaStreamAPISupported && !forSelectedPhotos ? (
          <video
            autoplay={true}
            ref={webcamRef}
            onPlay={e => {
              e.stopPropagation(); // calling this because in original code, `false` was passed to capture arg of addEventListener
              // https://reactjs.org/docs/events.html
              // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
              if (!streaming) {
                streaming = true;
              }
            }}
          />
        ) : (
          <img id="frame" src="" alt="" ref={webcamRef} />
        )}
        <div className="app-dialog app-dialog-hide">
          <div className="app-dialog-content">
            <h2>QR Code</h2>
            <input type="text" id="result" />
          </div>
          <div cassName="app-dialog-actions">
            <button className="app-dialog-open">Open</button>
            <button className="app-dialog-close">Close</button>
          </div>
        </div>
        This is a scanner!!
      </div>

      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        onClick={e => {
          canvas = canvasRef.current;
            ctx = canvas.getContext("2d");
        }}
      />

      <button className="app-select-photos">
        Simulates the option to select a photo from storage{" "}
      </button>
    </>
  );
};

export default Scanner;
