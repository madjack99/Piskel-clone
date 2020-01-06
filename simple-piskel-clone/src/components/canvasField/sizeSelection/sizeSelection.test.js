import testDom from '../../../test/testDom';

test('test1', () => {
  document.body.innerHTML = testDom;

  const { handleCanvasSizeChange } = require('./sizeSelection');
  const event = {
    target: {
      value: 32,
    },
  };
  handleCanvasSizeChange(event);
  const canvas = document.querySelector('.canvas');
  expect(canvas.width).toBe(32);
});
