import elements from '../elements';

export function removeActiveFrameClass() {
  const allFramesArr = Array.from(document.querySelectorAll('.frame'));
  allFramesArr.forEach((frame) => frame.classList.remove('frame_active'));
}

export function clearMainCanvas() {
  const { canvas } = elements;

  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 128, 128);
}

export function addDeleteBtn(node) {
  const deleteBtn = document.createElement('button');

  deleteBtn.className = 'delete-btn';
  deleteBtn.innerHTML = 'X';

  node.appendChild(deleteBtn);
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
