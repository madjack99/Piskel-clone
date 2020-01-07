import testDom from '../../test/testDom';

test('should remove frame_active class', () => {
  document.body.innerHTML = testDom;

  const { removeActiveFrameClass } = require('./framesHelper');
  removeActiveFrameClass();
  const updatedClassList = Array.from(
    document.querySelector('.frame').classList
  );
  expect(updatedClassList).not.toContain('frame_active');
});

describe('should add frame_active class to correct frame', () => {
  document.body.innerHTML = testDom;
  const { addActiveFrameClass } = require('./framesHelper');
  const { removeActiveFrameClass } = require('./framesHelper');

  test('should add frame_active to frame-0', () => {
    removeActiveFrameClass();
    addActiveFrameClass('0');
    const updatedClassList = Array.from(
      document.querySelector('.frame').classList
    );
    expect(updatedClassList).toContain('frame_active');
  });

  test('should not add frame_active to frame-0', () => {
    removeActiveFrameClass();
    addActiveFrameClass('1');
    const updatedClassList = Array.from(
      document.querySelector('.frame').classList
    );
    expect(updatedClassList).not.toContain('frame_active');
  });
});

test('should add button to the node', () => {
  document.body.innerHTML = '<div class="test"></div>';

  const { addDeleteBtn } = require('./framesHelper');
  const testDiv = document.querySelector('.test');
  addDeleteBtn(testDiv);
  expect(testDiv.children.length).toBe(1);
});
