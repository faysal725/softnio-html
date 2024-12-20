const sizeContainer = document.getElementById("size_container");
const priceContainer = document.getElementById("product_saleprice");

function sizeSelection(onload = false) {
  unSelectSizes();

  let sizeSelector;

  if (onload) {
    sizeSelector = sizeContainer.children[0];
  } else {
    sizeSelector = event.target.closest("div");
  }

  // class add
  sizeSelector.classList.add("border-lightIndigo");
  sizeSelector.classList.add("selected_size");
  sizeSelector.children[0].classList.add("text-lightIndigo");
  priceContainer.innerText = sizeSelector.children[1].innerText;
}

function unSelectSizes() {
  const sizeChildrens = sizeContainer.children;

  for (const child of sizeChildrens) {
    child.classList.remove("selected_size");
    child.classList.remove("border-lightIndigo");
    child.children[0].classList.remove("text-lightIndigo");
  }
}

window.addEventListener("load", (event) => {
  sizeSelection(true);
});
