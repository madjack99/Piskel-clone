import testDom from '../../../test/testDom';
import settings from '../../../settings';

describe('should handle tool selection correctly', () => {
  document.body.innerHTML = testDom;

  const { handleToolSelection } = require('./toolSelection');
  const testElem = document.createElement('span');
  testElem.className = 'bucket';
  const event = {
    target: testElem,
  };

  handleToolSelection(event);

  test('should add active class to a tool', () => {
    expect([...testElem.classList]).toContain('draw__item_active');
  });

  test('should set correct drawing tool to the settings', () => {
    expect(settings.drawingTool).toBe('bucket');
  });
});
