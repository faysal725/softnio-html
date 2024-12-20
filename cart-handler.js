const productName = document.getElementById("product_name");
let price = priceContainer.innerText;
let selectedSize = gettingSelectedItem(sizeContainer)
let imgSrc = imgContainer.src;


function addProductToStore() {
  // let productData = {
  //   name: form.value.name,
  //   imgSrc: form.value.imgSrc,
  //   noOfItem: form.value.noOfItem,
  //   color: form.value.color,
  //   size: form.value.size,
  //   price: form.value.price,
  //   oldPrice: form.value.oldPrice,
  //   variationCode: form.value.color + "-" + form.value.size,
  // };
  // setProduct(productData);
  // calculateTotalPriceNProduct();
}

function gettingSelectedItem(domElement) {
  const container = domElement.children;


  for (const child of container) {
    //   child.style.borderColor = "";
    //   child.classList.remove("selected");
    
console.log(child.classList.contains('selected'))
    if(child.classList.contains('selected')){
        return child
    }
  }
  return null
}


// function gettingSelectedItem(domElement) {
//     const container = domElement.children;
//     let selectedIndex;
  
  
//     console.log(container);
  
//     container.map((child, index) => {
//       let isSelected = child.classList.some("selected");
//       if (isSelected) {
//         selectedIndex = index;
//       }
//     });
    
//     return container[selectedIndex];
//   }