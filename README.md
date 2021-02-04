# Electron Crashes on Web Bluetooth API call

I've made this tiny project to illustrate that a [Web Bluetooth API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API) call crashes electron instantly. 

## Expected 
1) Run `npm start`
2) Press the "Use Web Bluetooth" button
3) In the browser console it outputs `"scanning.."` followed by `"Found a device! ...` or `"An error occurred..."`

## Actual
1) Run `npm start`
2) Press the "Use Web Bluetooth" button
3) Electron crashes. 

## Details
- On MacOS Big Sur (11.0.1): Electron `beta`, `v11`, `v10` and `v9` all lead to crashes. 
- MacOS Mojave (10.14.6): Electron `v9` and `v10` works as expected, but `v11` lead to crash. 
