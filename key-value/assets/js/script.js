let modifierKeys = {
  "Alt": document.getElementById("alt-key"),
  "Control": document.getElementById("control-key"),
  "Meta": document.getElementById("meta-key"),
  "Shift": document.getElementById("shift-key"),
};

let stateFalse = document.getElementById("state-false");
let stateTrue = document.getElementById("state-true");

let keyText = document.getElementById("key-text");
let binaryText = document.getElementById("binary-text");

window.addEventListener("keydown", (event) => {
  let key = event.key;

  if (key.length == 1) {
    keyText.innerText = key;
    binaryText.innerText = key.charCodeAt(0).toString(2).padStart(8, "0");
    return;
  }

  if (key == "AltGraph") {
    modifierKeys["Alt"].classList.add("pressed-modifier-key");
    modifierKeys["Control"].classList.add("pressed-modifier-key");
    modifierStateTrue();
    return;
  }

  if (key in modifierKeys) {
    modifierKeys[key].classList.add("pressed-modifier-key");
    modifierStateTrue();
  }
});

window.addEventListener("keyup", (event) => {
  let key = event.key;

  if (key.length == 1) {
    return;
  }

  if (key == "AltGraph") {
    modifierKeys["Alt"].classList.remove("pressed-modifier-key");
    modifierKeys["Control"].classList.remove("pressed-modifier-key");
    modifierStateFalse();
    return;
  }

  if (key in modifierKeys) {
    modifierKeys[key].classList.remove("pressed-modifier-key");
    modifierStateFalse();
  }
});

function modifierStateTrue() {
  stateFalse.style.display = "none";
  stateTrue.style.display = "grid";
}

function modifierStateFalse() {
  stateFalse.style.display = "grid";
  stateTrue.style.display = "none";
}

function copyBinary() {
  let binary = binaryText.innerText;

  navigator.clipboard.writeText(binary);
}