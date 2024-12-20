let checkoutBtnParent = document.querySelector(
  ".no_of_item_container"
).parentElement;
let checkoutBtn = document.querySelector(".no_of_item_container");
let totalPriceContainer = document.getElementById("total_price_container");

let tableContainer = document.getElementById("table_container");
let totalQtyContainer = document.getElementById("total_qty_container");
let modalContainer = document.getElementById("modal_container");

function changeNoOfItem() {
  console.log(checkoutBtnParent);
  checkoutBtn.innerText = initialState.totalNoOfProducts;
  checkoutBtnParent.classList.add("translate-y-0");
  console.log(initialState);
}

function tableRowCreation(data) {
  console.log(tableContainer, totalQtyContainer, modalContainer);

  data.forEach((product) => {
    const row = document.createElement("tr");

    const productCell = document.createElement("td");
    productCell.classList.add(
      "whitespace-nowrap",
      "py-4",
      "pl-4",
      "pr-3",
      "sm:pl-0",
      "flex",
      "items-center",
      "gap-2"
    );
    const productImage = document.createElement("img");
    productImage.src = product.imgSrc;
    productImage.alt = "";
    productImage.classList.add("h-8", "w-8", "object-cover", "rounded");
    const productName = document.createElement("p");
    productName.textContent = product.name;
    productName.classList.add("text-sm", "font-base", "text-darkGrey");
    productCell.appendChild(productImage);
    productCell.appendChild(productName);
    row.appendChild(productCell);

    const colorCell = document.createElement("td");
    colorCell.classList.add(
      "whitespace-nowrap",
      "px-3",
      "py-4",
      "text-sm",
      "text-darkGrey",
      "text-center"
    );
    colorCell.textContent = product.color;
    row.appendChild(colorCell);

    const sizeCell = document.createElement("td");
    sizeCell.classList.add(
      "whitespace-nowrap",
      "px-3",
      "py-4",
      "text-sm",
      "text-darkGrey",
      "text-center",
      "font-semibold"
    );
    sizeCell.textContent = product.size;
    row.appendChild(sizeCell);

    const noOfItemCell = document.createElement("td");
    noOfItemCell.classList.add(
      "whitespace-nowrap",
      "px-3",
      "py-4",
      "text-sm",
      "text-darkGrey",
      "text-center",
      "font-semibold"
    );
    noOfItemCell.textContent = product.noOfItem;
    row.appendChild(noOfItemCell);

    const priceCell = document.createElement("td");
    priceCell.classList.add(
      "whitespace-nowrap",
      "px-3",
      "py-4",
      "text-sm",
      "text-darkGrey",
      "text-center",
      "font-semibold"
    );
    priceCell.textContent = product.price * product.noOfItem;
    row.appendChild(priceCell);

    tableContainer.appendChild(row);
  });

  totalPriceContainer.innerText = `$${initialState.total}`;
  totalQtyContainer.innerText = initialState.totalNoOfProducts;
}

function openModal() {
  tableRowCreation(initialState.products);
  modalContainer.classList.remove("hidden");
  modalContainer.classList.add("flex");
}

function closeModal() {
  modalContainer.classList.add("hidden");
  modalContainer.classList.remove("flex");

  removeAllChildren(tableContainer);
}

function removeAllChildren(tableContainer) {
  while (tableContainer.firstChild) {
    tableContainer.removeChild(tableContainer.firstChild);
  }
}
