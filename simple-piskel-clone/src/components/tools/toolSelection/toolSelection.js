import settings from '../../../settings';
import elements from '../../elements';

const { drawingToolsArr } = elements;

export const handleToolSelection = (e) => {
  drawingToolsArr.forEach((node) => {
    node.classList.remove('draw__item_active');
  });

  if (e.target.classList.contains('pencil')) {
    settings.drawingTool = 'pencil';
    e.target.classList.add('draw__item_active');
  }
  if (e.target.classList.contains('bucket')) {
    settings.drawingTool = 'bucket';
    e.target.classList.add('draw__item_active');
  }
  if (e.target.classList.contains('stroke')) {
    e.target.classList.add('draw__item_active');
    settings.drawingTool = 'stroke';
  }
  if (e.target.classList.contains('eraser')) {
    e.target.classList.add('draw__item_active');
    settings.drawingTool = 'eraser';
  }
};

export default function addToolSelectionHandler() {
  drawingToolsArr.forEach((node) => {
    node.addEventListener('click', handleToolSelection);
  });
}
