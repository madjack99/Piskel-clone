import elements from '../../elements';
import settings from '../../../settings';
import { drawSavedImage, fillCanvasWithWhite } from '../canvas/canvasHelpers';

const { input32, input64, input128, canvas } = elements;

const handleCanvasSizeChange = (e) => {
  const { activeFrame } = settings;
  const newSizeValue = e.target.value;

  canvas.width = newSizeValue;
  canvas.height = newSizeValue;

  fillCanvasWithWhite(canvas);

  settings.canvasSelectedResolution = newSizeValue;

  drawSavedImage(activeFrame);
};

export default function addCanvasSizeHandler() {
  [input32, input64, input128].forEach((input) => {
    input.addEventListener('click', handleCanvasSizeChange);
  });
}
