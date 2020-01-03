import gifshot from 'gifshot';
import settings from '../../settings';
import elements from '../elements';

const { previewDiv } = elements;

export default function handleGifSave() {
  const { framesImagesArr, fps } = settings;
  console.log(typeof fps);
  gifshot.createGIF(
    {
      images: [...framesImagesArr],
      frameDuration: 10 / fps,
    },
    (obj) => {
      if (!obj.error) {
        const { image } = obj;
        const animatedImage = document.createElement('img');
        animatedImage.src = image;
        // document.body.appendChild(animatedImage);

        const downloadLink = document.createElement('a');
        downloadLink.href = image;
        downloadLink.download = 'generated gif';
        downloadLink.innerText = 'Download GIF';
        previewDiv.appendChild(downloadLink);
      }
    }
  );
}
