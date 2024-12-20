class Cart {
  constructor() {
    (this.products = []), (this.total = 0), (this.totalNoOfProducts = 0);
  }

  setProduct(productData) {
    if (this.products.length == 0) {
      this.products.push(productData);
    } else if (this.products.length > 0) {
      // let isProductExist = this.products.some(
      //   (product) => product["variationCode"] === productData["variationCode"]
      // );

      let productIndex = this.products.findIndex(
        (product) => product["variationCode"] === productData["variationCode"]
      );

      if (productIndex == -1) {
        this.products.push(productData);
      } else {
        this.products[productIndex]["noOfItem"] =
          this.products[productIndex]["noOfItem"] + productData["noOfItem"];
      }
    }
  }

  calculateTotalPriceNProduct() {
    let totalPrice = 0;
    let totalProducts = 0;
    this.products.map((product, index) => {
      totalProducts = totalProducts + product["noOfItem"];
      totalPrice = product["price"] * product["noOfItem"] + totalPrice;
      console.log(totalPrice, product["noOfItem"]);
    });
    console.log(totalPrice);
    this.total = totalPrice;
    this.totalNoOfProducts = totalProducts;
  }
  getProducts() {
    return this.products;
  }
}
