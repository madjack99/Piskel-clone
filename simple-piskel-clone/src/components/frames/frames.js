import settings from '../../settings';
import elements from '../elements';

import {
  removeActiveFrameClass,
  clearMainCanvas,
  addDeleteBtn,
  addActiveFrameClass,
} from './framesHelper';

const { addFrameBtn, framesDiv, frame0 } = elements;

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

function handleFrameSelection(e) {
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

  frameWrapper.className = 'frame-wrapper';

  newCanvas.className = `frame-${settings.framesCount} frame frame_active`;
  newCanvas.width = 128;
  newCanvas.height = 128;
  newCanvas.addEventListener('click', handleFrameSelection);

  addDeleteBtn(frameWrapper);

  frameWrapper.appendChild(newCanvas);
  framesDiv.appendChild(frameWrapper);
}

addFrameBtn.addEventListener('click', handleAddFrame);
frame0.addEventListener('click', handleFrameSelection);
