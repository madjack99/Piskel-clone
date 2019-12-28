import elements from '../../elements';
import settings from '../../../settings';
/* test code */
import draw from '../canvas/canvas';

const { input32, input64, input128, canvas } = elements;

const handleCanvasSizeChange = (e) => {
  const newSizeValue = e.target.value;

  canvas.width = newSizeValue;
  canvas.height = newSizeValue;

  settings.canvasSelectedResolution = newSizeValue;

  console.log(settings);
  /* test code */
  draw();
};

export default function addCanvasSizeHandler() {
  [input32, input64, input128].forEach((input) => {
    input.addEventListener('click', handleCanvasSizeChange);
  });
}
