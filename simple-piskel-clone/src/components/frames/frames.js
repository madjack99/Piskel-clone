import settings from '../../settings';
import elements from '../elements';

const { addFrameBtn, framesDiv } = elements;

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

function updateActiveFrame() {
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

  updateActiveFrame();
  clearMainCanvas();

  settings.framesCount += 1;
  settings.activeFrame = settings.framesCount;

  newCanvas.className = `frame-${settings.framesCount} frame frame_active`;
  newCanvas.width = 128;
  newCanvas.height = 128;

  framesDiv.appendChild(newCanvas);
  console.log(settings.activeFrame);
}

addFrameBtn.addEventListener('click', handleAddFrame);
