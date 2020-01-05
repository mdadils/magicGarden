"use strict";

const pixelEnum = [" ", "-", "|"];

const draw = (height, width, padding) => {
  let halfCols = [];
  const midWidth = width / 2;
  const effectivePadding = padding / 2;
  const numberOfIterations = height / 2;
  let currentOrigin = 0;

  const chackIsValidStartPosition = index => {
    return index === 0 || index % (effectivePadding + 1) === 0;
  };

  for (let rowIndex = 0; rowIndex < numberOfIterations; rowIndex++) {
    const halfRow = Array(midWidth).fill(0);
    currentOrigin = Math.min(midWidth - 1, rowIndex);

    for (let colIndex = 0; colIndex <= currentOrigin; colIndex++) {
      const isValidStartPosition = chackIsValidStartPosition(colIndex);

      if (isValidStartPosition) {
        halfRow[colIndex] = 2;
      }
      if (isValidStartPosition && colIndex === currentOrigin) {
        halfRow.fill(1, rowIndex + 1);
      }
    }
    const fullRow = [...halfRow, ...halfRow.reverse()];
    halfCols.push(fullRow);
  }

  return [...halfCols, ...halfCols.reverse()];
};

const drawOnCanvas = (height, width, padding) => {
  const pixelArrayJson = draw(height, width, padding);
  const oldNode = document.getElementById("garden");
  const parentPreNode = document.createElement("PRE");
  parentPreNode.setAttribute("id", "garden");

  const targetEl = document.getElementById("gardenCanvas");

  pixelArrayJson.forEach(row => {
    let stringStream = "";
    row.forEach(charCode => {
      stringStream += pixelEnum[charCode];
    });
    const singleRow = document.createTextNode(stringStream);
    const breakElement = document.createElement("BR");
    parentPreNode.appendChild(singleRow);
    parentPreNode.appendChild(breakElement);
  });
  targetEl.replaceChild(parentPreNode, oldNode);
};

const handleDrawButtonClick = () => {
  const height = document.getElementById("heightInput").value;
  const width = document.getElementById("widthInput").value;
  const padding = document.getElementById("paddingInput").value;
  drawOnCanvas(height, width, padding);
};

window.addEventListener(
  "load",
  function() {
    var controls = document.getElementById("controls");
    controls.addEventListener(
      "submit",
      function(event) {
        event.preventDefault();
        if (controls.checkValidity() === false) {
          event.stopPropagation();
        }
        controls.classList.add("was-validated");
        handleDrawButtonClick();
      },
      false
    );
  },
  false
);

window.onload = handleDrawButtonClick;
