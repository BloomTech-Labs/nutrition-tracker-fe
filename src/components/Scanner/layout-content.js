import React from "react";

export default const LayoutContent = () => {
    return(
        <div className="app-layout-content">
                {/* Original code use querySelectors but since we're using React, we'll use ref to  emulate the behavior */}
                <video autoplay ref="video" />
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
                <img ref="image" id="frame" src="" alt=""/>
                This is a scanner!!
            </div>
    )
}