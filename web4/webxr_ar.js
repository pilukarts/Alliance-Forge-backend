if (navigator.xr) {
    navigator.xr.requestSession("immersive-ar").then(session => {
        console.log("AR session started!");
    });
} else {
    console.log("WebXR not supported on this browser.");
}
