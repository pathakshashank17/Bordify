var style = document.createElement("link");

style.setAttribute("id", "bordify");
style.setAttribute("rel", "stylesheet");
style.setAttribute("type", "text/css");
style.setAttribute("href", chrome.extension.getURL("./styles.css"));

document.getElementsByTagName("head")[0].appendChild(style);