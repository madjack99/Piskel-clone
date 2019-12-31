import settings from '../../settings';
import elements from '../elements';

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

function addActiveFrameClass(id) {
  const allFramesArr = Array.from(document.querySelectorAll('.frame'));
  allFramesArr.forEach((frame) => {
    const frameId = frame.classList[0].split('-')[1];
    if (frameId === id) {
      frame.classList.add('frame_active');
    }
  });
}

function removeActiveFrameClass() {
  const allFramesArr = Array.from(document.querySelectorAll('.frame'));
  allFramesArr.forEach((frame) => frame.classList.remove('frame_active'));
}

function clearMainCanvas() {
  const { canvas } = elements;

  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 128, 128);
}

function handleAddFrame() {
  const newCanvas = document.createElement('canvas');

  removeActiveFrameClass();
  clearMainCanvas();

  settings.framesCount += 1;
  settings.activeFrame = settings.framesCount;

  newCanvas.className = `frame-${settings.framesCount} frame frame_active`;
  newCanvas.width = 128;
  newCanvas.height = 128;
  newCanvas.addEventListener('click', handleFrameSelection);

  framesDiv.appendChild(newCanvas);
}

addFrameBtn.addEventListener('click', handleAddFrame);
frame0.addEventListener('click', handleFrameSelection);
