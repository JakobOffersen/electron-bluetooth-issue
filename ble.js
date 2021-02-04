function scan() {
    console.log("scanning...")

    navigator.bluetooth.requestDevice({ acceptAllDevices: true})
    .then(device => console.log("Found a device!", device))
    .catch(err => console.log("An error occurred...", err))
}