import elements from '../elements';
import settings from '../../settings';

export default function preview(fps = 4) {
  const { previewAnimation } = elements;
  const { framesImagesArr, previewInterval } = settings;

  const imagesTotal = framesImagesArr.length;
  let imagesCounter = 0;

  if (previewInterval) {
    clearInterval(settings.previewInterval);
  }

  if (imagesTotal) {
    const currentInterval = setInterval(() => {
      const currentImage = framesImagesArr[imagesCounter];
      previewAnimation.style.backgroundImage = `url(${currentImage})`;
      if (imagesCounter === imagesTotal - 1) {
        imagesCounter = 0;
      } else {
        imagesCounter += 1;
      }
    }, 1000 / fps);

    settings.previewInterval = currentInterval;
  }
}
