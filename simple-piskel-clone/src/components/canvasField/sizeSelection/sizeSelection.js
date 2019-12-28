import elements from '../../elements';

/* test code */
import draw from '../canvas/canvas';

const { input32, input64, input128, canvas } = elements;

const handleCanvasSizeChange = (e) => {
  const newSizeValue = e.target.value;
  canvas.width = newSizeValue;
  canvas.height = newSizeValue;

  /* test code */
  draw();
};

export default function addCanvasSizeHandler() {
  [input32, input64, input128].forEach((input) => {
    input.addEventListener('click', handleCanvasSizeChange);
  });
}
