import settings from '../../../settings';

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
