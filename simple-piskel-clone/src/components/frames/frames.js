import settings from '../../settings';
import elements from '../elements';
import {
  saveImageFromMainCanvas,
  fillCanvasWithWhite,
} from '../canvasField/canvas/canvasHelpers';

import {
  removeActiveFrameClass,
  clearMainCanvas,
  addDeleteBtn,
  addActiveFrameClass,
  addCopyBtn,
  handleFrameCopy,
  handleFrameDelete,
} from './framesHelper';

const {
  addFrameBtn,
  framesDiv,
  frame0,
  frame0CopyBtn,
  frame0DeleteBtn,
} = elements;

export default function drawOnSideFrame(activeFrame) {
  const activeFrameNode = document.querySelector(`.frame-${activeFrame}`);
  const { framesImagesArr } = settings;
  const imgUrl = framesImagesArr[activeFrame];

  const ctx = activeFrameNode.getContext('2d');

  if (imgUrl) {
    const img = new Image();
    img.src = imgUrl;
    img.onload = () => {
      ctx.drawImage(img, 0, 0, 128, 128);
    };
  }
}

export function handleFrameSelection(e) {
  const { framesImagesArr, canvasSelectedResolution } = settings;
  const { classList } = e.target;
  const { canvas } = elements;

  const selectedFrameId = classList[0].split('-')[1];
  const selectedFrameImageUrl = framesImagesArr[selectedFrameId];
  const ctx = canvas.getContext('2d');

  clearMainCanvas();
  removeActiveFrameClass();
  addActiveFrameClass(selectedFrameId);

  settings.activeFrame = selectedFrameId;

  if (selectedFrameImageUrl) {
    const newImage = new Image();
    newImage.src = selectedFrameImageUrl;
    newImage.onload = () => {
      ctx.drawImage(
        newImage,
        0,
        0,
        canvasSelectedResolution,
        canvasSelectedResolution
      );
    };
  }
}

function handleAddFrame() {
  const newCanvas = document.createElement('canvas');
  const frameWrapper = document.createElement('div');

  removeActiveFrameClass();
  clearMainCanvas();

  settings.framesCount += 1;
  settings.activeFrame = settings.framesCount;
  console.log(settings.framesCount);

  frameWrapper.className = 'frame-wrapper';

  newCanvas.className = `frame-${settings.framesCount} frame frame_active`;
  newCanvas.width = 128;
  newCanvas.height = 128;
  newCanvas.addEventListener('click', handleFrameSelection);
  fillCanvasWithWhite(newCanvas);

  saveImageFromMainCanvas(settings.framesCount);

  addDeleteBtn(frameWrapper);
  frameWrapper.appendChild(newCanvas);
  addCopyBtn(frameWrapper);

  framesDiv.appendChild(frameWrapper);
}

addFrameBtn.addEventListener('click', handleAddFrame);
frame0.addEventListener('click', handleFrameSelection);
frame0CopyBtn.addEventListener('click', handleFrameCopy);
frame0DeleteBtn.addEventListener('click', handleFrameDelete);
