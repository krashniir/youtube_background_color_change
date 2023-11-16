// Retrieve the stored color from chrome.storage and apply it
chrome.storage.sync.get({ color: '#882626' }, function (result) {
  var selectedColor = result.color;

  // Create a style element to set the background color
  var styleElement = document.createElement('style');
  styleElement.setAttribute('data-yt-extension', 'true');
  styleElement.textContent = `
    html[dark], [dark] {
      --yt-spec-base-background: ${selectedColor} !important;
    }
  `;

  // Inject the style element into the page
  document.head.appendChild(styleElement);
});

// Listen for color change messages from the background script or popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var selectedColor = request.color;

  // Create or update the style element to set the background color
  var styleElement = document.querySelector('style[data-yt-extension]');
  if (styleElement) {
    styleElement.textContent = `
      html[dark], [dark] {
        --yt-spec-base-background: ${selectedColor} !important;
      }
    `;
  } else {
    styleElement = document.createElement('style');
    styleElement.setAttribute('data-yt-extension', 'true');
    styleElement.textContent = `
      html[dark], [dark] {
        --yt-spec-base-background: ${selectedColor} !important;
      }
    `;
    document.head.appendChild(styleElement);
  }
});
