chrome.commands.onCommand.addListener(function (command) {
    if (command === "toggle-fullscreen") {
        chrome.windows.getCurrent(function (currentWindow) {
            chrome.windows.update(currentWindow.id, { state: "fullscreen" });
            chrome.windows.update(currentWindow.id, { state: "normal" });
            chrome.windows.update(currentWindow.id, { state: "fullscreen" });
        });
    }
});