import testDom from '../../../test/testDom';
import settings from '../../../settings';

describe('rgb to hex function', () => {
  document.body.innerHTML = testDom;
  const { rgbToHex } = require('./canvasHelpers');

  test('should return correct color value', () => {
    expect(rgbToHex(44, 22, 88)).toBe('#2c1658');
  });

  test('should return #0 if called without args', () => {
    expect(rgbToHex()).toBe('#0');
  });
});

test('canvas should be painted with white after applying fillWithWhite func', () => {
  document.body.innerHTML = testDom;

  const { fillCanvasWithWhite } = require('./canvasHelpers');
  const canvas = document.querySelector('.canvas');

  fillCanvasWithWhite(canvas);

  const ctx = canvas.getContext('2d');
  // expect(ctx.__getEvents()[0].props.value).toBe('#fff');
  expect(ctx.__getEvents()).toMatchSnapshot();
});

test('should correctly update the framesImagesArr', () => {
  document.body.innerHTML = testDom;

  const { saveImageFromMainCanvas } = require('./canvasHelpers');
  const { framesImagesArr } = settings;

  saveImageFromMainCanvas(0);

  expect(framesImagesArr.length).toBe(1);
});
