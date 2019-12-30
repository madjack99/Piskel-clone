import elements from '../elements';

export default function drawOnSideFrame() {
  const { frame1 } = elements;
  const savedCanvas = localStorage.getItem('myCanvas');

  const ctx1 = frame1.getContext('2d');

  if (savedCanvas) {
    const img = new Image();
    img.src = savedCanvas;
    img.onload = () => {
      ctx1.drawImage(img, 0, 0, 128, 128);
    };
  }
}
