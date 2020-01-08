import elements from '../../elements';
import settings from '../../../settings';

const { brushSizeArr } = elements;

export const handleBrushSizeChange = (e) => {
  brushSizeArr.forEach((node) => {
    node.classList.remove('size_active');
  });

  if ([...e.target.classList].includes('size__one')) {
    settings.brushSize = 1;
    e.target.className += ' size_active';
  }
  if ([...e.target.classList].includes('size__two')) {
    settings.brushSize = 2;
    e.target.className += ' size_active';
  }
  if ([...e.target.classList].includes('size__three')) {
    settings.brushSize = 3;
    e.target.className += ' size_active';
  }
  if ([...e.target.classList].includes('size__four')) {
    settings.brushSize = 4;
    e.target.className += ' size_active';
  }
};

export default function addBrushSizeSelectionHandler() {
  brushSizeArr.forEach((node) => {
    node.addEventListener('click', handleBrushSizeChange);
  });
}
