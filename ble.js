function scan() {
    console.log("scanning...")

    navigator.bluetooth.requestDevice({ acceptAllDevices: true})
    .then(device => console.log(device))
}