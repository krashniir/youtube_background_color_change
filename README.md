# YouTube Background Color Change Extension

Change the background color of YouTube with this Chrome extension.

## How to Use

### Installation

1. Clone or download the repository to your local machine:

   ```
   git clone https://github.com/krashniir/youtube_background_color_change.git
   ```
   
2. Open Google Chrome and navigate to chrome://extensions/.

3. Enable "Developer mode" in the top right corner.

4. Click on "Load unpacked" and select the folder where you cloned or downloaded the extension.

### Usage

Once the extension is installed, you should see its icon in the Chrome toolbar.

Click on the extension icon to open the color picker.

Select your desired color and click the "Change Color" button.

The background color of YouTube pages will change immediately.

### How It Works

The extension uses a browser action (popup) to provide a simple user interface for selecting a color.
The selected color is stored using the chrome.storage API to persist across browser sessions.
The background script (background.js) listens for color change requests from the popup and broadcasts the change to all open tabs.
The content script (content.js) injects a style element into YouTube pages, changing the background color according to the selected color.

### License

This project is licensed under the MIT License - see the LICENSE file for details.
