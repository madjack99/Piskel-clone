import elements from '../../elements';
import settings from '../../../settings';

const { input32, input64, input128, canvas } = elements;

const handleCanvasSizeChange = (e) => {
  const newSizeValue = e.target.value;

  canvas.width = newSizeValue;
  canvas.height = newSizeValue;

  settings.canvasSelectedResolution = newSizeValue;
};

export default function addCanvasSizeHandler() {
  [input32, input64, input128].forEach((input) => {
    input.addEventListener('click', handleCanvasSizeChange);
  });
}
