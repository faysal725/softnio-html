const sizeContainer = document.getElementById("size_container");


function sizeSelection(onload = false) {
    
    unSelectSizes()
    
    let sizeSelector;
  
    if (onload) {
      sizeSelector = sizeContainer.children[0];
    } else {
      sizeSelector = event.target.closest("div");
    }
  
    // class add 
    sizeSelector.classList.add("border-lightIndigo");
    sizeSelector.classList.add("selected");
    sizeSelector.children[0].classList.add('text-lightIndigo')
  }


  function unSelectSizes() {
    const sizeChildrens = sizeContainer.children;
  
    for (const child of sizeChildrens) {
      child.classList.remove("selected");
      child.classList.remove("border-lightIndigo");
      child.children[0].classList.remove('text-lightIndigo')
    }
  }


  window.addEventListener("load", (event) => {
    sizeSelection(true);
  });