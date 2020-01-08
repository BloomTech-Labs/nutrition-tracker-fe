import React, { useEffect, useRef, useState } from "react";
import Quagga from "quagga"; // Barcode Decoder! https://github.com/serratus/quaggaJS

window.iOS = ["iPad", "iPhone", "iPod"].indexOf(navigator.platform) >= 0;
window.isMediaStreamAPISupported =
  navigator &&
  navigator.mediaDevices &&
  "enumerateDevices" in navigator.mediaDevices;
window.noCameraPermission = false;

const Scanner = () => {
  window.isMediaStreamAPISupported =
    navigator &&
    navigator.mediaDevices &&
    "enumerateDevices" in navigator.mediaDevices;
  let canvasRef = useRef(null),
    webcamRef = useRef(null),
    forSelectedPhotos = false,
    canvas = null,
    ctx = null;

  let [quaggaResult, setQuaggaResult] = useState("");

  const quaggaInit = () => {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: webcamRef.current // Or '#yourElement' (optional)
        },
        decoder: {
          readers: ["upc_reader", "ean_8_reader"]
        },
        multiple: false
      },
      function(err) {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();
      }
    );
  };

  useEffect(() => {
    Quagga.onProcessed(data => {
      if (data) console.log("Quagga deets", data);
    });

    Quagga.onDetected(data => {
      if (data) {
        console.log("Quagga detection", data);
        if (data.codeResult.code) {
          setQuaggaResult(data.codeResult.code);
          console.log(webcamRef.current);
          Quagga.stop(); // found a possible result, stop processing images for now
        }
      }
    });
    quaggaInit();
  }, []);

  function showErrorMsg() {
    window.noCameraPermission = true;
    alert("Unable to access the camera");
  }

  function startCapture(constraints) {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function(stream) {
        webcamRef.current.srcObject = stream;
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

  return (
    <>
      <div className="app-layout-content">
        {/* Original code use querySelectors but since we're using React, we'll use react refs to  emulate the behavior 
        Docs on video tag: https://www.w3schools.com/html/html5_video.asp
        */}
        {window.isMediaStreamAPISupported && !forSelectedPhotos ? (
          <video autoplay="autoplay" ref={webcamRef} height="25%" width="25%">Your browser doesn't support video.</video>
        ) : (
          <img id="frame" src="" alt="" ref={webcamRef} />
        )}
        <div className="app-dialog app-dialog-hide">
          <div className="app-dialog-content">
            <input type="text" id="result" value={quaggaResult} />
          </div>
          <div className="app-dialog-actions">
            <button className="app-dialog-open" onClick={quaggaInit}>
              Try Again
            </button>
            <button className="app-dialog-search" onClick={()=>console.log("Results", quaggaResult)}>
                Search
            </button>
          </div>
        </div>
      </div>


      
    </>
  );
};

export default Scanner;
