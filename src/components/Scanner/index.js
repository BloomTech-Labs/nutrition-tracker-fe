import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { searchBarcode } from "../../store/actions/scannerAction";
import Quagga from "quagga"; // Barcode Decoder! https://github.com/serratus/quaggaJS
import { useToasts } from "react-toast-notifications";


window.iOS = ["iPad", "iPhone", "iPod"].indexOf(navigator.platform) >= 0;
window.isMediaStreamAPISupported =
  navigator &&
  navigator.mediaDevices &&
  "enumerateDevices" in navigator.mediaDevices;
window.noCameraPermission = false;

const Scanner = props => {
  const { addToast } = useToasts();

  function handleSearchBarcode(quagga_barcode) {
    props.searchBarcode(quagga_barcode).then(response => {
      if (response) {
        props.history.push(`/food-item/view/${response}`);
      } else {
        Quagga.stop();
        showErrorMsg(`Unable to find item for barcode ${quagga_barcode}, try again`)
      }
    });
  }

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
        window.setTimeout(()=>{showErrorMsg("No barcode detected, try again"); quaggaInit();},30000)
        Quagga.start();
      }
    );
  };

  useEffect(() => {
    /*Quagga.onProcessed(data => {
      if (data) console.log("Quagga deets", data);
    });*/ // Use this for testing

    Quagga.onDetected(data => {
      
      if (data) {
        if (data.codeResult.code) {
          handleSearchBarcode(data.codeResult.code);
          Quagga.stop(); // found a possible result, stop processing images for now
        }
      }
    });
    quaggaInit();
  }, []);

  function showErrorMsg(message="Error", cameraIssue=false) {
    window.noCameraPermission = cameraIssue;
    addToast(message, {
          appearance: "error",
          autoDismiss: true
        });
  }

  function startCapture(constraints) {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function(stream) {
        webcamRef.current.srcObject = stream;
      })
      .catch(function(err) {
        console.log("Error occurred ", err);
        Quagga.stop();
        showErrorMsg("Unable to access camera", true);

      });
  }

  if (window.isMediaStreamAPISupported && !window.noCameraPermission) {
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
        showErrorMsg("Error iniating barcode scanner", true);
        console.log("Error initiating Quagga", error);
      });
  }

  return (
    <>
      <div>
        {/* Original code use querySelectors but since we're using React, we'll use react refs to  emulate the behavior
        Docs on video tag: https://www.w3schools.com/html/html5_video.asp
        */}
        {window.isMediaStreamAPISupported && !forSelectedPhotos ? (
          <video autoplay="autoplay" ref={webcamRef} height="25%" width="25%" onClick={()=>{console.log("Wow")}}>
            Your browser doesn't support video.
          </video>
        ) : (
          <img id="frame" src="" alt="" ref={webcamRef} />
        )}
        {/*<div>
          <div>
            <input type="text" id="result" value={quaggaResult} />
          </div>
          <div>
            <button onClick={quaggaInit}>
              Try Again
            </button>
          </div>
        </div> */ /* Use these elements for testing */}
      </div>
    </>
  );
};

export default connect(null, { searchBarcode })(Scanner);
