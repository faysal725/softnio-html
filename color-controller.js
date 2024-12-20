
const colorContainer = document.getElementById("color_container");

function colorSelection(onload=false) {
  removeBorderColors();

  let colorSelector

  if (onload) {
    colorSelector = colorContainer.children[0].children[0];
  }else{
    colorSelector = event.target.closest("div");
  }
  
  
  const childBackgroundColor = convertToHex(getComputedStyle(colorSelector).backgroundColor);

  // convert to hex code 
  colorSelector.parentElement.style.borderColor = childBackgroundColor;
  colorSelector.parentElement.classList.add("selected");
  imgChanger(childBackgroundColor);
}

function removeBorderColors() {
  const colorContainers = document.getElementById("color_container").children;

  for (const container of colorContainers) {
    container.style.borderColor = "";
    container.classList.remove("selected");
  }
}



function convertToHex(rgbCode) {
  const rgbRegex = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/i;
  const match = rgbRegex.exec(rgbCode);
  if (match) {
    const r = parseInt(match[1], 10).toString(16);
    const g = parseInt(match[2], 10).toString(16);
    const b = parseInt(match[3], 10).toString(16);
    return `#${r.padStart(2, "0")}${g.padStart(2, "0")}${b.padStart(2, "0")}`;
  }
  return rgb; 
}

window.addEventListener("load", (event) => {
  colorSelection(true)
});
