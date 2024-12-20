let initialState = {
  products: [],
  total: 0,
  totalNoOfProducts: 0,
};

function addProductToStore() {
  const name = document.getElementById("product_name").innerText;
  let price = priceContainer.innerText;
  let size = document.querySelector(".selected_size").children[0].innerText;
  let color = convertToHex(
    getComputedStyle(document.querySelector(".selected_color").children[0])
      .backgroundColor
  );
  let imgSrc = imgContainer.src;
  let noOfItem = counterContainer.innerText;
  let variationCode = color + "-" + size;

  let productData = {
    name: name,
    imgSrc: imgSrc,
    noOfItem: Number(noOfItem),
    color: color,
    size: size,
    price: Number(price.substring(1)),
    variationCode: variationCode,
  };

  setProduct(productData);
  calculateTotalPriceNProduct();
  changeNoOfItem();
}

function setProduct(productData) {
  if (initialState.products.length == 0) {
    initialState.products.push(productData);
  } else if (initialState.products.length > 0) {
    let productIndex = initialState.products.findIndex(
      (product) => product["variationCode"] === productData["variationCode"]
    );

    if (productIndex == -1) {
      initialState.products.push(productData);
    } else {
      initialState.products[productIndex]["noOfItem"] =
        initialState.products[productIndex]["noOfItem"] +
        productData["noOfItem"];
    }
  }
}

function calculateTotalPriceNProduct() {
  let totalPrice = 0;
  let totalProducts = 0;
  initialState.products.map((product, index) => {
    totalProducts = totalProducts + product["noOfItem"];
    totalPrice = product["price"] * product["noOfItem"] + totalPrice;
  });
  initialState.total = totalPrice;
  initialState.totalNoOfProducts = totalProducts;
}
