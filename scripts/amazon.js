import { cart, addToCart } from "../data/cart.js";
import { products } from "../data/products.js";
import formatCurrency from "./utils/money.js";

let productsHTML = "";

products.forEach((products) => {
  productsHTML += `<div class="product-container" bis_skin_checked="1">
          <div class="product-image-container" bis_skin_checked="1">
            <img class="product-image" src="${products.image}">
          </div>

          <div class="product-name limit-text-to-2-lines" bis_skin_checked="1">
            ${products.name}
          </div>

          <div class="product-rating-container" bis_skin_checked="1">
            <img class="product-rating-stars" src="${products.getStarsUrl()}">
            <div class="product-rating-count link-primary" bis_skin_checked="1">${
              products.rating.count
            }</div>
          </div>

          <div class="product-price" bis_skin_checked="1">${products.getPrice()}</div>

          <div class="product-quantity-container" bis_skin_checked="1">
            <select>
              <option selected="" value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
            ${products.extraInfoHTML()}
          <div class="product-spacer" bis_skin_checked="1"></div>

          <div class="added-to-cart" bis_skin_checked="1">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${
            products.id
          }">Add to Cart</button>
        </div>`;
});
//console.log(productsHTML);

document.querySelector(".js-products-grid").innerHTML = productsHTML;

function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => (cartQuantity += cartItem.quantity));

  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
}

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    addToCart(productId);
    updateCartQuantity();
  });
});
