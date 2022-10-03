// Initialize popup.html button in JavaScript.
var example_button = document.getElementById("example-button");

// Checks if example_button is initialized, implemented to fix common error.
if (example_button) {
  // Checks if example-button button is clicked.
  example_button.addEventListener("click", async () => {
    // Queries tabs to select current active tab.
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // execute example.js on current page.
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['scripts/example.js'],
    });
  });
}