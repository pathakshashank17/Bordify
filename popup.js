const button = document.getElementById("toggle");
var isON = false

button.addEventListener("click", () => {
    if (!isON) {
        chrome.runtime.sendMessage({ action: "activate" });   
    } else {
        chrome.runtime.sendMessage({ action: "deactivate" }); 
    }
    isON = !isON;
});
