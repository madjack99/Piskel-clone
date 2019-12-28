import elements from '../../elements';

const { canvas } = elements;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

const ctx = canvas.getContext('2d');

function draw(e) {
  if (!isDrawing) return;
  ctx.fillStyle = 'blue';
  const x = Math.floor(e.offsetX / 16);
  const y = Math.floor(e.offsetY / 16);
  console.log(x, y, 1, 1);
  ctx.fillRect(x, y, 1, 1);
}

export default function addDrawingHandler() {
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mousedown', () => (isDrawing = true));
  canvas.addEventListener('mouseup', () => (isDrawing = false));
  canvas.addEventListener('mouseout', () => (isDrawing = false));
}
