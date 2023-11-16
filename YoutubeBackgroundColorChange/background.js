// Listen for color change requests from the popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log('Received color change request:', request.color);
  chrome.storage.sync.set({ color: request.color });

  // Broadcast the color change to all tabs
  chrome.tabs.query({}, function (tabs) {
    tabs.forEach(function (tab) {
      chrome.tabs.sendMessage(tab.id, { color: request.color });
    });
  });
});
