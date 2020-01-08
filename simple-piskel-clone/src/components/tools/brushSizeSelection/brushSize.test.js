import testDom from '../../../test/testDom';
import settings from '../../../settings';

test('should set correct brush size to settings', () => {
  document.body.innerHTML = testDom;

  const { handleBrushSizeChange } = require('./brushSize');
  const event = {
    target: {
      classList: ['size__three', 'size'],
    },
  };
  handleBrushSizeChange(event);
  expect(settings.brushSize).toBe(3);
});
