import elements from '../../elements';

const {
  primaryColorLabel,
  secondaryColorLabel,
  primaryColorInput,
  secondaryColorInput,
} = elements;

const handleColorChange = (e) => {
  const clickedColorInput = e.target;
  const selectedColor = e.target.value;

  if (Array.from(clickedColorInput.classList).includes('color__primary')) {
    primaryColorLabel.style.background = selectedColor;
  } else {
    secondaryColorLabel.style.background = selectedColor;
  }
};

function addColorSelectionHandlers() {
  [primaryColorInput, secondaryColorInput].forEach((input) => {
    input.addEventListener('change', handleColorChange);
  });
}

export default addColorSelectionHandlers;
