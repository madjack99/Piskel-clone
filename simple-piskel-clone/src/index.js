import draw from './components/canvasField/canvas/canvas';
import addColorSelectionHandlers from './components/tools/colorSelection/colors';
import addCanvasSizeHandler from './components/canvasField/sizeSelection/sizeSelection';

import './styles/main.scss';

addColorSelectionHandlers();
addCanvasSizeHandler();

draw();
