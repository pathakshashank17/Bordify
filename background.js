var isOn = false;

chrome.runtime.onMessage.addListener(({action}) => {
    if (action === "toggle") {
        if (isOn) {
            chrome.tabs.executeScript({ file: "removeBorder.js" });
        } else {
            chrome.tabs.executeScript({ file: "addBorder.js" });
        }
        isOn = !isOn;
    }
    return true;
});