import elements from '../../elements';
import settings from '../../../settings';

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
    settings.primaryColor = selectedColor;
  } else {
    secondaryColorLabel.style.background = selectedColor;
    settings.secondaryColor = selectedColor;
  }
};

function addColorSelectionHandlers() {
  [primaryColorInput, secondaryColorInput].forEach((input) => {
    input.addEventListener('change', handleColorChange);
  });
}

export default addColorSelectionHandlers;
