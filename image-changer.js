const imgContainer = document.getElementById("product_img");

function imgChanger(colorCode) {
  switch (colorCode) {
    case "#816bff":
      setThumnailImg("./assets/watch/blue.png");
      break;
    case "#1fcec9":
      setThumnailImg("./assets/watch/purple.png");
      break;
    case "#4b97d3":
      setThumnailImg("./assets/watch/cyan.png");
      break;
    case "#3b4747":
      setThumnailImg("./assets/watch/black.png");
      break;
    default:
      console.log("Invalid day.");
  }
}

function setThumnailImg(src) {
  imgContainer.src = src;
}
