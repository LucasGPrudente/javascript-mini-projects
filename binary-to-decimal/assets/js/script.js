// input
const inputBinary = document.getElementById("binary-input");
const inputDecimal = document.getElementById("decimal-input");

// div
const infoBinary = document.getElementById("info-binary");
const infoDecimal = document.getElementById("info-decimal");

infoBinary.style.display = "none";
infoDecimal.style.display = "none";

// binary to decimal convert
inputBinary.addEventListener("input", () => {
  let value = inputBinary.value;

  if(value == ""){
    hideInfo();
    inputBinary.value = "";
    inputDecimal.value = "";
    return;
  }

  let lastDigit = parseInt(value.charAt(value.length - 1));
  let binary = value.replace(/[^0-1]/g, '');

  if(binary.length > 8){ binary = binary.substring(0, 8); }

  inputBinary.value = binary;

  if(isNaN(lastDigit) || (lastDigit != 0 && lastDigit != 1)){
    infoBinary.style.display = "flex";
    infoBinary.style.animation = "fade-in 700ms forwards";
    return;
  }

  inputDecimal.value = parseInt(binary, 2);
});

// decimal to binary convert
inputDecimal.addEventListener("input", () => {
  let value = inputDecimal.value;

  if(value == ""){
    hideInfo();
    inputDecimal.value = "";
    inputBinary.value = "";
    return;
  }

  value = value.replace(/[^0-9]/g, "");

  if(value == ""){
    inputDecimal.value = "";
    return;
  }

  let decimal = Number(value);

  if (decimal > 255){
    infoDecimal.style.display = "flex";
    infoDecimal.style.animation = "fade-in 700ms forwards";

    decimal = 255;
  }

  inputDecimal.value = decimal;
  inputBinary.value = decimal.toString(2);
});

// hide all information divs
function hideInfo() {
  infoBinary.style.animation = "fade-out 700ms forwards";
  infoDecimal.style.animation = "fade-out 700ms forwards";

  setTimeout( () => {
    infoBinary.style.display = "none";
    infoDecimal.style.display = "none";
  }, 700);
}