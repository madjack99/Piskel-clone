import elements from '../elements';
import settings from '../../settings';

export default function preview(fps = 1) {
  const { previewAnimation } = elements;
  const { framesImagesArr } = settings;
  const imagesTotal = framesImagesArr.length;
  let imagesCounter = 0;

  if (imagesTotal) {
    setInterval(() => {
      console.log('test');
      const currentImage = framesImagesArr[imagesCounter];
      previewAnimation.style.backgroundImage = `url(${currentImage})`;
      if (imagesCounter === imagesTotal - 1) {
        imagesCounter = 0;
      } else {
        imagesCounter += 1;
      }
    }, 1000 / fps);
  }
}
