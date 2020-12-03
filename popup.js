var timer;

threshold.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        if (threshold.value < 1) return
        event.preventDefault();
        clearTimeout(timer);
        timer = setTimeout(clear, threshold.value * 1000);
        info.innerText = "Close this to retain history";
    }
});

function clear() {
    info.innerText = "Cleared history";
    chrome.browsingData.remove({
        "originTypes": {
            "protectedWeb": true
        }
    }, {
        "appcache": true,
        "cache": true,
        "cacheStorage": true,
        "cookies": true,
        "downloads": true,
        "fileSystems": true,
        "formData": true,
        "history": true,
        "indexedDB": true,
        "localStorage": true,
        "passwords": true,
        "serviceWorkers": true,
        "webSQL": true
    });
}
