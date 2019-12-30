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

addFrameBtn.addEventListener('click', handleAddFrame);

function handleAddFrame() {
  const allFramesArr = Array.from(document.querySelectorAll('.frame'));
  const newCanvas = document.createElement('canvas');

  allFramesArr.forEach((frame) => frame.classList.remove('frame_active'));

  settings.framesCount += 1;

  newCanvas.className = `frame-${settings.framesCount} frame frame_active`;
  newCanvas.width = 128;
  newCanvas.height = 128;

  framesDiv.appendChild(newCanvas);
  console.log(newCanvas);
}
