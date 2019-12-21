const QRReader = {
    active: false,
    webcam: null,
    canvas: null,
    ctx: null,
    decoder: null
};



function setPhotoSourceToScan() { // TODO
    return null;
}

QRReader.init = () => {
    const streaming = false;

    setPhotoSourceToScan(); // TODO

    QRReader.setCanvas(); // TODO

    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers
    QRReader.decoder = new Worker("./decoder.js");

}

export default QRReader;