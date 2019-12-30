import elements from '../elements';
import settings from '../../settings';

export default function preview(fps = 8) {
  const { previewAnimation } = elements;
  const { framesImagesArr } = settings;
  const imagesTotal = framesImagesArr.length;
  let imagesCounter = 0;

  if (imagesTotal) {
    setInterval(() => {
      const currentImage = framesImagesArr[imagesCounter];
      previewAnimation.style.backgroundImage = `url(${currentImage})`;
      if (imagesCounter === imagesTotal - 1) {
        imagesCounter = 0;
      } else {
        imagesCounter += 1;
      }
    }, 1000 / fps);
  }

  // previewAnimation.style.backgroundImage = `url(${savedImage})`;
}
