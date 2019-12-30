import addDrawingHandler from './components/canvasField/canvas/canvas';
import addColorSelectionHandlers from './components/tools/colorSelection/colors';
import addCanvasSizeHandler from './components/canvasField/sizeSelection/sizeSelection';
import addBrushSizeSelectionHandler from './components/tools/brushSizeSelection/brushSize';
import addToolSelectionHandler from './components/tools/toolSelection/toolSelection';
import drawOnSideFrame from './components/frames/frames';
import settings from './settings';

import { drawSavedImage } from './components/canvasField/canvas/canvasHelpers';

import './styles/main.scss';

addColorSelectionHandlers();
addCanvasSizeHandler();
addBrushSizeSelectionHandler();
addToolSelectionHandler();

addDrawingHandler();

window.addEventListener('load', () => {
  const { activeFrame } = settings;

  drawOnSideFrame(activeFrame);
  drawSavedImage();
});
