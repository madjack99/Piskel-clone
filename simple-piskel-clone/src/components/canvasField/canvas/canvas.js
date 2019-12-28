import elements from '../../elements';

const { canvas } = elements;

export default function draw() {
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'blue';
  ctx.fillRect(0, 0, 1, 1);
}
