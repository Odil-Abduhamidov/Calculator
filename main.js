const display = document.getElementById("display");

function appendToDisplay(value) {
  if (display.innerText === "0" && value !== ".") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function changeSign() {
  if (display.innerText !== "0") {
    display.innerText = display.innerText.startsWith("-")
      ? display.innerText.substring(1)
      : "-" + display.innerText;
  }
}

function percent() {
  display.innerText = parseFloat(display.innerText) / 100;
}

function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = "Ошибка";
  }
}
