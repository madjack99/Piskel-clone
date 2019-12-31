import elements from '../elements';
import settings from '../../settings';

export default function preview(fps = 4) {
  const { previewAnimation } = elements;
  const { framesImagesArr, previewInterval } = settings;

  let imagesCounter = 0;

  const framesImagesWithContent = framesImagesArr.filter(
    (frameContent) => frameContent !== undefined
  );
  const imagesTotal = framesImagesWithContent.length;

  if (previewInterval) {
    clearInterval(settings.previewInterval);
  }

  if (imagesTotal) {
    const currentInterval = setInterval(() => {
      const currentImage = framesImagesWithContent[imagesCounter];
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
