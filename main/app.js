console.log('hello world');



//var card = document.querySelector(".card");
//console.log(homeCon)

function card(i, div , display){ 
    var card = document.createElement("a")
    card.setAttribute("href", `item.html?id=${all[i].slno}`)
    card.classList.add("card")
    card.classList.add(`${all[i].slno}`);
    card.classList.add(`${all[i].feature}`);
    card.style.display = `${display}`
    card.innerHTML = `
    <div class="card-image">
    <img src="img/001aae88e335681e8a59dac2cf6522a4.jpg" alt="">
    <div class="tagline">
      <small>${all[i].discount}% Off</small>
    </div>
    <div class="buttons">
      <button><i class="fas fa-cart-arrow-down"></i>Cart</button>
      <button><i class="fa fa-heart" aria-hidden="true"></i>wishlist</button>
    </div>
</div>


  <div class="description">
      <h1>${all[i].name}</h1>
      <p class="brand">${all[i].brand}</p>
      <p>${all[i].price}Tk <span class="preprice">${all[i].prePrice}Tk</span></p> 
  </div>
  `;

    div.appendChild(card)
}

// cart item adding

var inCart = [3,5,7]

function CartUpdate() {
  for (var i = 0; i < inCart.length; i++) {
     document.createElement("tr");
     true.innerHTML = `
     <td>1</td>
     <td class="product-data">
       <div class="image">
         <img src="img/001aae88e335681e8a59dac2cf6522a4.jpg" alt="">
       </div>
       <div class="data">
         <h3>Black Shirt</h3>
         <p>500 Tk</p>
       </div>
     </td>
     <td><span>remove</span></td>
     `
  }
}

var cartTable = document.createElement("table")
var cartwindow = document.querySelector(".item-container")
var cardclosebtn = document.querySelector(".cardclosebtn")
var cartTriger = document.querySelector(".nav-cart-btn")

cartTriger.addEventListener("click", function(e) {
  cartwindow.classList.remove("item-container-close")
})
cardclosebtn.addEventListener("click", function(e) { 
  cartwindow.classList.add("item-container-close")
});

