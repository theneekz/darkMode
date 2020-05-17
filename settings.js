document.addEventListener(
  'DOMContentLoaded',
  function () {
    document.querySelector('button').addEventListener('click', onclick, false);
    let OnStatus = true;
    function onclick() {
      chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        if (OnStatus) {
          chrome.tabs.sendMessage(tabs[0].id, 'Dark mode engaged!');
          OnStatus = false;
        } else {
          chrome.tabs.sendMessage(tabs[0].id, 'Dark mode turned off.');
          OnStatus = true;
        }
      });
    }
  },
  false
);
