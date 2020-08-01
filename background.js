chrome.runtime.onMessage.addListener((message) => {
    console.log(message);
    if (message.action === "activate") {
        chrome.tabs.executeScript({ file: "addBorder.js" });
    } else if (message.action === "deactivate") {
        chrome.tabs.executeScript({ file: "removeBorder.js" });
    }
    return true;
});