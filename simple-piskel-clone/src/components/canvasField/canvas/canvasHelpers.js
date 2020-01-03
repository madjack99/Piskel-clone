import settings from '../../../settings';
import bresenhamAlgorithm from './bresenhamAlgorithm';
import elements from '../../elements';
import drawOnSideFrame from '../../frames/frames';

export function rgbToHex(r, g, b) {
  return `#${((r << 16) | (g << 8) | b).toString(16)}`;
}

export function floodFill(x, y, target, replacement, ctx) {
  const currentColor = ctx.getImageData(x, y, 1, 1).data;
  let currentColorHex = rgbToHex(...currentColor.slice(0, 3));
  let targetColorHex = rgbToHex(...target.slice(0, 3));

  if (currentColor[3] === 255 && currentColorHex === '#0') {
    currentColorHex = '#000000';
  }

  if (target[3] === 255 && targetColorHex === '#0') {
    targetColorHex = '#000000';
  }

  if (targetColorHex === replacement) return;
  if (currentColorHex !== targetColorHex) return;
  if (
    x > settings.canvasSelectedResolution - 1 ||
    x < 0 ||
    y > settings.canvasSelectedResolution - 1 ||
    y < 0
  ) {
    return;
  }

  ctx.fillStyle = settings.primaryColor;
  ctx.fillRect(x, y, 1, 1);

  floodFill(x, y + 1, target, replacement, ctx);
  floodFill(x, y - 1, target, replacement, ctx);
  floodFill(x + 1, y, target, replacement, ctx);
  floodFill(x - 1, y, target, replacement, ctx);
}

export function makeStroke(coordForStroke) {
  const { activeFrame } = settings;

  if (settings.drawingTool === 'stroke') {
    const startStroke = coordForStroke[0];
    const endStroke = coordForStroke[coordForStroke.length - 1];

    bresenhamAlgorithm(...startStroke, ...endStroke);

    saveImageFromMainCanvas(activeFrame);
    drawOnSideFrame(activeFrame);
  }
}

export function drawSavedImage(activeFrame) {
  const { canvasSelectedResolution, framesImagesArr } = settings;
  const { canvas } = elements;

  const imgUrl = framesImagesArr[activeFrame];

  if (imgUrl) {
    const img = new Image();
    img.src = imgUrl;
    img.onload = () => {
      canvas
        .getContext('2d')
        .drawImage(
          img,
          0,
          0,
          canvasSelectedResolution,
          canvasSelectedResolution
        );
    };
  }
}

export function saveImageFromMainCanvas(activeFrame) {
  const { canvas } = elements;
  const { framesImagesArr } = settings;

  const currentImageOnCanvas = canvas.toDataURL();

  framesImagesArr[activeFrame] = currentImageOnCanvas;
}

export function fillCanvasWithWhite(canvas) {
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, 128, 128);
}
