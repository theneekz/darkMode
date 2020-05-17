chrome.runtime.onMessage.addListener(function (request) {
  alert(request);
  if (request === 'Dark mode engaged!') {
    document.body.style.backgroundColor = 'grey';

    const elems = document.body.getElementsByTagName('div');
    [...elems].forEach((element) => {
      element.style.backgroundColor = 'grey';
    });
  } else {
    parent.window.location.reload(true);
  }
});
