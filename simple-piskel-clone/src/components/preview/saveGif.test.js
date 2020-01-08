import testDom from '../../test/testDom';

describe('should replace old link or add new link', () => {
  document.body.innerHTML = testDom;

  const { customAppendChild } = require('./saveGif');

  const link = document.createElement('a');
  link.className = 'first-link link gif-download';

  test('should add first link', () => {
    customAppendChild(link);
    const addedLink = document.querySelector('.link');

    expect([...addedLink.classList]).toContain('first-link');
  });

  test('should replace first link with second link', () => {
    const secondLink = document.createElement('a');
    secondLink.className = 'second-link link gif-download';

    customAppendChild(secondLink);

    expect([...document.querySelector('.link').classList]).not.toContain(
      'first-link'
    );
  });
});

test('should delete node', () => {
  document.body.innerHTML =
    '<div class="wrapper"><div class="inner"></div></div>';

  const { deleteNode } = require('./saveGif');
  const wrapper = document.querySelector('.wrapper');
  const inner = document.querySelector('.inner');

  deleteNode(inner);
  expect(wrapper.children.length).toBe(0);
});
