import testDom from '../../../test/testDom';
import settings from '../../../settings';

describe('switch to correct canvas size', () => {
  document.body.innerHTML = testDom;

  const { handleCanvasSizeChange } = require('./sizeSelection');
  const event = {
    target: {
      value: 32,
    },
  };
  handleCanvasSizeChange(event);

  test('should update width and height of a main canvas', () => {
    const canvas = document.querySelector('.canvas');
    expect(canvas.width && canvas.height).toBe(32);
  });

  test('canvasSelectedResolution should return 32', () => {
    expect(settings.canvasSelectedResolution).toBe(32);
  });
});
