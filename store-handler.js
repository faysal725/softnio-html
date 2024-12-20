// const initialState = {
//   products: [],
//   total: 0,
//   totalNoOfProducts: 0,
// };

// const addToCart = (state, productData) => {
//   const existingProductIndex = state.products.findIndex(
//     (product) => product.variationCode === productData.variationCode
//   );

//   if (existingProductIndex === -1) {
//     return {
//       ...state,
//       products: [...state.products, productData],
//     };
//   } else {
//     const updatedProducts = state.products.map((product, index) =>
//       index === existingProductIndex
//         ? { ...product, noOfItem: product.noOfItem + productData.noOfItem }
//         : product
//     );

//     return {
//       ...state,
//       products: updatedProducts,
//     };
//   }
// };

// const calculateTotalPrice = (products) => {
//   const total = products.reduce(
//     (acc, product) => acc + product.price * product.noOfItem,
//     0
//   );
//   const totalNoOfProducts = products.reduce(
//     (acc, product) => acc + product.noOfItem,
//     0
//   );

//   return { total, totalNoOfProducts };
// };

// const getCartState = (state) => state;

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return addToCart(state, action.payload);
//     case 'CALCULATE_TOTAL':
//       const { total, totalNoOfProducts } = calculateTotalPrice(state.products);
//       return { ...state, total, totalNoOfProducts };
//     default:
//       return state;
//   }
// };