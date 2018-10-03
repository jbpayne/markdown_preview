let sourceText = document.getElementById('source');
let previewArea = document.getElementById('preview');
let renderButton = document.getElementById('render');
let timeout;
sourceText.addEventListener("keydown", function () {
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    previewArea.innerHTML = marked(sourceText.value);
  }, 1000);
});
renderButton.onclick = function () {
  previewArea.innerHTML = marked(sourceText.value);
}
