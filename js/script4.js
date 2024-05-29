const canvas = document.getElementById('rectangleCanvas');
const ctx = canvas.getContext('2d');
const inputs = {
  x: document.getElementById('xInput'),
  y: document.getElementById('yInput'),
  width: document.getElementById('widthInput'),
  height: document.getElementById('heightInput'),
  fillColor: document.getElementById('fillColorInput'),
  borderColor: document.getElementById('borderColorInput'),
};
const drawButton = document.getElementById('drawButton');
const clearButton = document.getElementById('clearButton');

function drawRectangle() {
  const x = parseInt(inputs.x.value);
  const y = parseInt(inputs.y.value);
  const width = parseInt(inputs.width.value);
  const height = parseInt(inputs.height.value);
  const fillColor = inputs.fillColor.value;
  const borderColor = inputs.borderColor.value;

  if (!Number.isNaN(x) && !Number.isNaN(y) && !Number.isNaN(width) && !Number.isNaN(height)) {
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = borderColor;
    ctx.fillRect(x, y, width, height);
    ctx.strokeRect(x, y, width, height);
  } else {
    alert('Please enter valid numeric values for coordinates and dimensions.');
  }
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

drawButton.addEventListener('click', drawRectangle);
clearButton.addEventListener('click', clearCanvas);