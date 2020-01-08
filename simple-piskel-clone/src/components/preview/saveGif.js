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
          deleteNode(downloadLink);
        });

        customAppendChild(downloadLink);
      }
    }
  );
}

export function customAppendChild(element) {
  const existingLink = document.querySelector('.gif-download');
  // console.log([...existingLink.classList]);
  if (existingLink) {
    previewDiv.removeChild(existingLink);
  }
  previewDiv.appendChild(element);
}

export function deleteNode(element) {
  element.parentNode.removeChild(element);
}
