import elements from '../../elements';
import settings from '../../../settings';
import bresenhamAlgorithm from './bresenhamAlgorithm';

const { canvas } = elements;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

const ctx = canvas.getContext('2d');

function draw(e) {
  if (!isDrawing) return;

  const pixelSize =
    settings.realCanvasResolution / settings.canvasSelectedResolution;
  const x = Math.floor(e.offsetX / pixelSize);
  const y = Math.floor(e.offsetY / pixelSize);

  ctx.fillStyle = settings.primaryColor;
  ctx.fillRect(x, y, 1, 1);

  bresenhamAlgorithm(
    Math.floor(lastX / pixelSize),
    Math.floor(lastY / pixelSize),
    x,
    y
  );

  [lastX, lastY] = [e.offsetX, e.offsetY];
}

export default function addDrawingHandler() {
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });
  canvas.addEventListener('mouseup', () => (isDrawing = false));
  canvas.addEventListener('mouseout', () => (isDrawing = false));
}
