import gifshot from 'gifshot';
import settings from '../../settings';
import elements from '../elements';

const { previewDiv } = elements;

export default function handleGifSave() {
  const { framesImagesArr, fps } = settings;
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
        downloadLink.className = 'gif-download';
        downloadLink.href = image;
        downloadLink.download = 'generated gif';
        downloadLink.innerText = 'Download GIF';

        downloadLink.addEventListener('click', () => {
          deleteLink(downloadLink);
        });

        customAppendChild(downloadLink);
      }
    }
  );
}

function customAppendChild(element) {
  const existingLink = document.querySelector('.gif-download');
  if (existingLink) {
    previewDiv.removeChild(existingLink);
  }
  previewDiv.appendChild(element);
}

function deleteLink(element) {
  element.parentNode.removeChild(element);
}
