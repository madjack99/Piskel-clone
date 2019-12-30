import elements from '../elements';

export default function preview() {
  const { previewAnimation } = elements;
  console.log(previewAnimation);
  const savedImage = localStorage.getItem('myCanvas');
  previewAnimation.style.backgroundImage = `url(${savedImage})`;
}
