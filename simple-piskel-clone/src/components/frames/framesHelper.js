import elements from '../elements';
import settings from '../../settings';
import preview from '../preview/preview';
import { handleFrameSelection } from './frames';

export function removeActiveFrameClass() {
  const allFramesArr = Array.from(document.querySelectorAll('.frame'));
  allFramesArr.forEach((frame) => frame.classList.remove('frame_active'));
}

export function clearMainCanvas() {
  const { canvas } = elements;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, 128, 128);
}

export function addActiveFrameClass(id) {
  const allFramesArr = Array.from(document.querySelectorAll('.frame'));
  allFramesArr.forEach((frame) => {
    const frameId = frame.classList[0].split('-')[1];
    if (frameId === id) {
      frame.classList.add('frame_active');
    }
  });
}

export function addDeleteBtn(node) {
  const deleteBtn = document.createElement('button');

  deleteBtn.className = 'delete-btn';
  deleteBtn.innerHTML = 'X';

  deleteBtn.addEventListener('click', handleFrameDelete);

  node.appendChild(deleteBtn);
}

export function handleFrameDelete(e) {
  const { framesImagesArr } = settings;

  const allFramesArr = Array.from(document.querySelectorAll('.frame'));
  const frameToDelete = e.target.nextElementSibling.classList[0];
  const frameId = Number.parseInt(frameToDelete.split('-')[1], 10);

  allFramesArr.forEach((frame) => {
    const frameClassList = Array.from(frame.classList);
    if (frameClassList.includes(frameToDelete)) {
      const frameWrapperToDelete = frame.parentNode;
      frameWrapperToDelete.parentNode.removeChild(frameWrapperToDelete);
    }
  });

  framesImagesArr.splice(frameId, 1);
  settings.framesCount -= 1;

  updateCanvasClassNameIds();

  elements.frame0.click();

  preview();
}

export function addCopyBtn(node) {
  const copyBtn = document.createElement('button');

  copyBtn.className = 'copy-btn';
  copyBtn.innerHTML = 'C';

  copyBtn.addEventListener('click', handleFrameCopy);

  node.appendChild(copyBtn);
}

export function handleFrameCopy(e) {
  const { framesImagesArr } = settings;

  const canvasToCopy = e.target.previousElementSibling;
  const canvasToCopyId = Number.parseInt(
    canvasToCopy.classList[0].split('-')[1],
    10
  );
  const canvasWrapperToCopy = e.target.parentNode;

  const copiedFrame = canvasWrapperToCopy.cloneNode(true);

  canvasWrapperToCopy.insertAdjacentElement('afterend', copiedFrame);
  updateCanvasClassNameIds();

  settings.framesCount += 1;
  settings.activeFrame = canvasToCopyId + 1;

  const canvasImageToCopy = framesImagesArr[canvasToCopyId];
  framesImagesArr.splice(canvasToCopyId + 1, 0, canvasImageToCopy);

  const copiedCanvas = document.querySelector(`.frame-${canvasToCopyId + 1}`);
  const newImage = new Image();
  newImage.src = canvasImageToCopy;
  newImage.onload = () => {
    copiedCanvas.getContext('2d').drawImage(newImage, 0, 0, 128, 128);
  };
  const copiedCanvasDelBtn = copiedCanvas.previousElementSibling;
  const copiedCanvasCopyBtn = copiedCanvas.nextElementSibling;

  copiedCanvas.addEventListener('click', handleFrameSelection);
  copiedCanvas.classList.add('frame_active');
  copiedCanvasDelBtn.addEventListener('click', handleFrameDelete);
  copiedCanvasCopyBtn.addEventListener('click', handleFrameCopy);

  copiedCanvas.click();
}

function updateCanvasClassNameIds() {
  Array.from(document.querySelectorAll('.frame')).forEach((frame, index) => {
    frame.className = `frame-${index} frame`;
  });
}
