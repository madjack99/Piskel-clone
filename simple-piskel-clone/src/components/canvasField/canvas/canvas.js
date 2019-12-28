import elements from '../../elements';
import settings from '../../../settings';

const { canvas } = elements;
const {
  primaryColor,
  secondaryColor,
  realCanvasResolution,
  canvasSelectedResolution,
} = settings;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

const ctx = canvas.getContext('2d');

function draw(e) {
  if (!isDrawing) return;

  const pixelSize = realCanvasResolution / canvasSelectedResolution;
  const x = Math.floor(e.offsetX / pixelSize);
  const y = Math.floor(e.offsetY / pixelSize);

  ctx.fillStyle = primaryColor;
  ctx.fillRect(x, y, 1, 1);
}

export default function addDrawingHandler() {
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mousedown', () => (isDrawing = true));
  canvas.addEventListener('mouseup', () => (isDrawing = false));
  canvas.addEventListener('mouseout', () => (isDrawing = false));
}
