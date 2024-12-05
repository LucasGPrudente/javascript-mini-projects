// box to show border radius modification
const box = document.getElementById("test-box");

// input
const inputTopLeft = document.getElementById("top-left-input");
const inputTopRight = document.getElementById("top-right-input");
const inputBottomLeft = document.getElementById("bottom-left-input");
const inputBottomRight = document.getElementById("bottom-right-input");

// add an event to input "top-left-input" that changes the test box
inputTopLeft.addEventListener("input", () => {
  let value = (inputTopLeft.value == "") ? 0 : parseInt(inputTopLeft.value);

  inputTopLeft.value = value;
  box.style.borderTopLeftRadius = inputTopLeft.value + 'px';
});

// add an event to input "top-right-input" that changes the test box
inputTopRight.addEventListener("input", () => {
  let value = (inputTopRight.value == "") ? 0 : parseInt(inputTopRight.value);

  inputTopRight.value = value;
  box.style.borderTopRightRadius = inputTopRight.value + 'px';
});

// add an event to input "bottom-left-input" that changes the test box
inputBottomLeft.addEventListener("input", () => {
  let value = (inputBottomLeft.value == "") ? 0 : parseInt(inputBottomLeft.value);

  inputBottomLeft.value = value;
  box.style.borderBottomLeftRadius = inputBottomLeft.value + 'px';
});

// add an event to input "bottom-right-input" that changes the test box
inputBottomRight.addEventListener("input", () => {
  let value = (inputBottomRight.value == "") ? 0 : parseInt(inputBottomRight.value);

  inputBottomRight.value = value;
  box.style.borderBottomRightRadius = inputBottomRight.value + 'px';
});

// reset the value of all inputs to zero
function resetInputs() {
  inputTopLeft.value = 0;
  inputTopRight.value = 0;
  inputBottomLeft.value = 0;
  inputBottomRight.value = 0;

  box.style.borderTopLeftRadius = inputTopLeft.value + 'px';
  box.style.borderTopRightRadius = inputTopRight.value + 'px';
  box.style.borderBottomLeftRadius = inputBottomLeft.value + 'px';
  box.style.borderBottomRightRadius = inputBottomRight.value + 'px';
}

// copy the border-radius attribute to the clipboard
function copyInput() {
  let attribute = "border-radius: " + window.getComputedStyle(box).getPropertyValue('border-radius') + ";";

  navigator.clipboard.writeText(attribute);

  alert("Copied: " + attribute);
}