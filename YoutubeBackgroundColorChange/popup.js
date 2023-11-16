document.addEventListener('DOMContentLoaded', function () {
  var colorPicker = document.getElementById('colorPicker');
  var changeColorButton = document.getElementById('changeColor');

  // Load the stored color from chrome.storage
  chrome.storage.sync.get({ color: '#882626' }, function (result) {
    colorPicker.value = result.color;
    console.log('Loaded color:', result.color);
  });

  changeColorButton.addEventListener('click', function () {
    var selectedColor = colorPicker.value;
    console.log('Button clicked. Selected color:', selectedColor);

    // Send a message to the background script
    chrome.runtime.sendMessage({ color: selectedColor });
  });
});

