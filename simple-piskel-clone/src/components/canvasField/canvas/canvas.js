import elements from '../../elements';
import settings from '../../../settings';
import bresenhamAlgorithm from './bresenhamAlgorithm';
import { floodFill } from './canvasHelpers';

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

  if (settings.drawingTool === 'pencil') {
    ctx.fillStyle = settings.primaryColor;
    ctx.fillRect(x, y, settings.brushSize, settings.brushSize);

    bresenhamAlgorithm(
      Math.floor(lastX / pixelSize),
      Math.floor(lastY / pixelSize),
      x,
      y
    );
  }

  if (settings.drawingTool === 'eraser') {
    ctx.clearRect(x, y, settings.brushSize, settings.brushSize);
  }

  if (settings.drawingTool === 'bucket') {
    const targetColor = ctx.getImageData(x, y, 1, 1).data;
    const replacementColor = settings.primaryColor;
    // const targetColorHex = rgbToHex(...targetColor.slice(0, 3));

    floodFill(x, y, targetColor, replacementColor, ctx);
  }

  [lastX, lastY] = [e.offsetX, e.offsetY];
}

export default function addDrawingHandler() {
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
    draw(e);
  });
  canvas.addEventListener('mouseup', () => (isDrawing = false));
  canvas.addEventListener('mouseout', () => (isDrawing = false));
}
