window.onload = function () {
  prismHighlightCodes();
}

function prismHighlightCodes() {
  var preTags = document.getElementsByTagName('pre'),
    len = preTags !== null ? preTags.length : 0,
    i = 0;

  for (i; i < len; i++) {
    preTags[i].className += ' line-numbers';
  }

  Prism.highlightAll();
}