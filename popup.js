const button = document.getElementById("toggle");

button.addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "toggle" });
});
