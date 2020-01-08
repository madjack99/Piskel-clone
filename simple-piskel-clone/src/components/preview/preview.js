import elements from '../elements';
import settings from '../../settings';
import handleGifSave from './saveGif';

const { fpsSliderInput, previewAnimation, exportGif } = elements;

export function preview(fps = 4) {
  const { framesImagesArr, previewInterval } = settings;

  let imagesCounter = 0;

  const framesImagesWithContent = framesImagesArr.filter(
    (frameContent) => frameContent !== undefined
  );
  const imagesTotal = framesImagesWithContent.length;

  settings.fps = fps;

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

export function handleFpsChange(e) {
  const newFpsValue = e.target.value;
  const displayFpsValue = document.querySelector('.fps-value');

  displayFpsValue.innerHTML = newFpsValue;
  preview(newFpsValue);
}

function handleFullScreen() {
  if (!document.fullscreenElement) {
    previewAnimation.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

fpsSliderInput.addEventListener('change', handleFpsChange);
previewAnimation.addEventListener('click', handleFullScreen);
exportGif.addEventListener('click', handleGifSave);
