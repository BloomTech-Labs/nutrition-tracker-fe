import React, { useEffect, useRef } from "react";

//import QRReader from "./qrscan";

import LayoutContent from "./layout-content";
import SelectPhotos from "./select-photos";

window.iOS = ["iPad", "iPhone", "iPod"].indexOf(navigator.platform) >= 0;
window.isMediaStreamAPISupported =
  navigator &&
  navigator.mediaDevices &&
  "enumerateDevices" in navigator.mediaDevices;
window.noCameraPermission = false;

const Scanner = () => {
  window.isMediaStreamAPISupported = navigator && navigator.mediaDevices && 'enumerateDevices' in navigator.mediaDevices;
  let canvasRef = useRef(null);
  let webcamRef = useRef(null);
  let forSelectedPhotos = false;
  let streaming = false;

  function showErrorMsg() {
    window.noCameraPermission = true;
    alert("Unable to access the camera");
  }

  function startCapture(constraints) {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function(stream) {
        webcamRef.current.srcObject = stream;
        webcamRef.current.setAttribute('playsinline', true);
        webcamRef.current.setAttribute('controls', true);
        setTimeout(() => {
          webcamRef.current.removeAttribute('controls');
        });
      })
      .catch(function(err) {
        console.log('Error occurred ', err);
        showErrorMsg();
      });
  }

  if (window.isMediaStreamAPISupported) {
    navigator.mediaDevices
      .enumerateDevices()
      .then(function(devices) {
        let device = devices.filter(function(device) {
          let deviceLabel = device.label.split(',')[1];
          if (device.kind == 'videoinput') {
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
            constraints.video.facingMode = 'environment';
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
            constraints.video.facingMode = 'environment';
          }

          startCapture(constraints);
        } else {
          startCapture({ video: true });
        }
      })
      .catch(function(error) {
        showErrorMsg();
        console.error('Error occurred : ', error);
      });
  }

  /*useEffect(() => {
    QRReader.init(); // init scanner
    QRReader.ctx = canvasRef.current.getContext("2d")
  }, []);*/


  return (
    <>
      <div className="app-layout-content">
                {/* Original code use querySelectors but since we're using React, we'll use ref to  emulate the behavior */}
                {window.isMediaStreamAPISupported && !forSelectedPhotos
                ? <video autoplay ref={webcamRef} onPlay={
                    (e) => {
                        e.stopPropagation(); // calling this because in original code, `false` was passed to capture arg of addEventListener
                        // https://reactjs.org/docs/events.html
                        // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
                        if (!streaming) {
                            streaming = true;
                        }
                    }
                }/>
                : <img id="frame" src="" alt="" ef={webcamRef}/>}
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
          const canvas = canvasRef.current,
            ctx = canvas.getContext("2d");
        }}
      />

      <button className="app-select-photos" >Simulates the option to select a photo from storage </button>
    </>
  );
};

export default Scanner;
