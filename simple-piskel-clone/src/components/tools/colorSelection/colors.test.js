import testDom from '../../../test/testDom';
import settings from '../../../settings';

test('set correctly primary color to the settings', () => {
  document.body.innerHTML = testDom;

  const { handleColorChange } = require('./colors');
  const event = {
    target: {
      classList: ['color__primary'],
      value: '#0f00f0',
    },
  };
  handleColorChange(event);

  expect(settings.primaryColor).toBe('#0f00f0');
});

test('set correctly secondary color to the settings', () => {
  document.body.innerHTML = testDom;

  const { handleColorChange } = require('./colors');
  const event = {
    target: {
      classList: [],
      value: '#00f00f',
    },
  };
  handleColorChange(event);

  expect(settings.secondaryColor).toBe('#00f00f');
});
