import settings from '../../settings';

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