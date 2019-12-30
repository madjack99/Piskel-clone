import elements from '../../elements';
import settings from '../../../settings';
import bresenhamAlgorithm from './bresenhamAlgorithm';
import drawOnSideFrame from '../../frames/frames';
import preview from '../../preview/preview';

import { floodFill, makeStroke } from './canvasHelpers';

const { canvas } = elements;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

const ctx = canvas.getContext('2d');
let coordForStroke = [];

function draw(e) {
  if (!isDrawing) return;

  const {
    realCanvasResolution,
    canvasSelectedResolution,
    primaryColor,
    brushSize,
    drawingTool,
    activeFrame,
    framesImagesArr,
  } = settings;

  const pixelSize = realCanvasResolution / canvasSelectedResolution;

  const x = Math.floor(e.offsetX / pixelSize);
  const y = Math.floor(e.offsetY / pixelSize);

  ctx.fillStyle = primaryColor;

  if (drawingTool === 'pencil') {
    ctx.fillRect(x, y, brushSize, brushSize);

    bresenhamAlgorithm(
      Math.floor(lastX / pixelSize),
      Math.floor(lastY / pixelSize),
      x,
      y
    );
  }

  if (drawingTool === 'eraser') {
    ctx.clearRect(x, y, brushSize, brushSize);
  }

  if (drawingTool === 'bucket') {
    const targetColor = ctx.getImageData(x, y, 1, 1).data;
    const replacementColor = primaryColor;

    floodFill(x, y, targetColor, replacementColor, ctx);
  }

  if (drawingTool === 'stroke') {
    coordForStroke.push([x, y]);
  }

  [lastX, lastY] = [e.offsetX, e.offsetY];

  const currentImageOnCanvas = canvas.toDataURL();
  framesImagesArr[activeFrame] = currentImageOnCanvas;

  drawOnSideFrame(activeFrame);
  preview();
}

export default function addDrawingHandler() {
  canvas.addEventListener('mousemove', draw);

  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
    draw(e);
  });

  canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    makeStroke(coordForStroke);
    coordForStroke = [];
  });

  canvas.addEventListener('mouseout', () => (isDrawing = false));
}
