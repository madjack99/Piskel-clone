import elements from '../elements';
import settings from '../../settings';
import preview from '../preview/preview';

export function removeActiveFrameClass() {
  const allFramesArr = Array.from(document.querySelectorAll('.frame'));
  allFramesArr.forEach((frame) => frame.classList.remove('frame_active'));
}

export function clearMainCanvas() {
  const { canvas } = elements;

  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 128, 128);
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

function handleFrameDelete(e) {
  const { framesImagesArr } = settings;

  const allFramesArr = Array.from(document.querySelectorAll('.frame'));
  const frameToDelete = e.target.nextSibling.classList[0];
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

  Array.from(document.querySelectorAll('.frame')).forEach((frame, index) => {
    frame.className = `frame-${index} frame`;
  });

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

function handleFrameCopy() {
  console.log('copy');
}
