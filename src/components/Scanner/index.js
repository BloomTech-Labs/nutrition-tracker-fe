import React, { useEffect } from "react";

import LayoutContent from "./layout-content";
import SelectPhotos from "./select-photos";


window.iOS = ['iPad', 'iPhone', 'iPod'].indexOf(navigator.platform) >= 0;
window.isMediaStreamAPISupported = navigator && navigator.mediaDevices && 'enumerateDevices' in navigator.mediaDevices;
window.noCameraPermission = false;

export const Scanner = () => {

    useEffect(()=>{
        QRReader.init(); // init scanner
        setTimeout(()=>{
            setCameraOverlay(); // TODO
            window.isMediaStreamAPISupported /*TODO*/ ? scan() /*TODO*/ : null;
        }, 1000)
    },[])

        return (
            <LayoutContent />
            <SelectPhotos />
        )
}

export default Scanner;