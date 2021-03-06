const canvas = document.querySelector('.canvas');

const primaryColorLabel = document.querySelector('.primary__label');
const secondaryColorLabel = document.querySelector('.secondary__label');
const primaryColorInput = document.querySelector('.color__primary');
const secondaryColorInput = document.querySelector('.color__secondary');

const input32 = document.querySelector('.input-32');
const input64 = document.querySelector('.input-64');
const input128 = document.querySelector('.input-128');

const brushSizeArr = [...document.querySelector('.size').children];

const drawingToolsArr = [...document.querySelector('.draw').children];

const frame1 = document.querySelector('.frame-1');

const previewDiv = document.querySelector('.preview');
const previewAnimation = document.querySelector('.preview__animation');

const addFrameBtn = document.querySelector('.add-frame');

const framesDiv = document.querySelector('.frames');
const frame0 = document.querySelector('.frame-0');

const frame0CopyBtn = document.querySelector('.copy-btn');
const frame0DeleteBtn = document.querySelector('.delete-btn');

const displayFpsValue = document.querySelector('.fps-value');
const fpsSliderInput = document.querySelector('.fps-slider');

const exportGif = document.querySelector('.export-gif');

const elements = {
  canvas,
  primaryColorLabel,
  secondaryColorLabel,
  primaryColorInput,
  secondaryColorInput,
  input32,
  input64,
  input128,
  brushSizeArr,
  drawingToolsArr,
  frame1,
  previewAnimation,
  addFrameBtn,
  framesDiv,
  frame0,
  frame0CopyBtn,
  frame0DeleteBtn,
  displayFpsValue,
  fpsSliderInput,
  exportGif,
  previewDiv,
};

export default elements;
