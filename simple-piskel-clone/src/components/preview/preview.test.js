import testDom from '../../test/testDom';
import settings from '../../settings';

test('should update fps in settings', () => {
  document.body.innerHTML = testDom;

  const { preview } = require('./preview');

  preview(7);
  expect(settings.fps).toBe(7);
});

test('should update fps value in innerHTML correctly', () => {
  document.body.innerHTML = testDom;

  const { handleFpsChange } = require('./preview');
  const event = {
    target: {
      value: 8,
    },
  };
  const displayFpsValue = document.querySelector('.fps-value');
  handleFpsChange(event);

  expect(displayFpsValue.innerHTML).toBe('8');
});
