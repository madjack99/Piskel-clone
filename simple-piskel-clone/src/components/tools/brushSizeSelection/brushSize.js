import elements from '../../elements';
import settings from '../../../settings';

const { brushSizeArr } = elements;

const handleBrushSizeChange = (e) => {
  brushSizeArr.forEach((node) => {
    node.classList.remove('size__active');
  });

  if (e.target.classList.contains('size__one')) {
    settings.brushSize = 1;
    e.target.classList.add('size__active');
  }
  if (e.target.classList.contains('size__two')) {
    settings.brushSize = 2;
    e.target.classList.add('size__active');
  }
  if (e.target.classList.contains('size__three')) {
    settings.brushSize = 3;
    e.target.classList.add('size__active');
  }
  if (e.target.classList.contains('size__four')) {
    settings.brushSize = 4;
    e.target.classList.add('size__active');
  }
};

export default function addBrushSizeSelectionHandler() {
  brushSizeArr.forEach((node) => {
    node.addEventListener('click', handleBrushSizeChange);
  });
}
