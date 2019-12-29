import addDrawingHandler from './components/canvasField/canvas/canvas';
import addColorSelectionHandlers from './components/tools/colorSelection/colors';
import addCanvasSizeHandler from './components/canvasField/sizeSelection/sizeSelection';
import addBrushSizeSelectionHandler from './components/tools/brushSizeSelection/brushSize';

import './styles/main.scss';

addColorSelectionHandlers();
addCanvasSizeHandler();
addBrushSizeSelectionHandler();

addDrawingHandler();
