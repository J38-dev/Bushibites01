let cart = {};
let qty = {1:1,2:1,3:1};

function changeQty(id,val){
  qty[id] = Math.max(1, qty[id] + val);
  document.getElementById("qty-"+id).innerText = qty[id];
}

function addToCart(id,name){
  let price = document.getElementById("price-"+id).value;

  if(!cart[id]){
    cart[id] = {name, price, qty:0};
  }

  cart[id].qty += qty[id];
  renderCart();
}

function renderCart(){
  let box = document.getElementById("cart-items");
  box.innerHTML = "";

  let total = 0;

  Object.values(cart).forEach(item=>{
    total += item.price * item.qty;
    box.innerHTML += `
      <div>${item.name} x ${item.qty} - R${item.price}</div>
    `;
  });

  document.getElementById("total").innerText = total;
  document.getElementById("cart-count").innerText = Object.keys(cart).length;
}

function toggleTrolley(){
  document.getElementById("trolley").classList.toggle("open");
}

function scrollToProducts(){
  document.getElementById("products").scrollIntoView({behavior:"smooth"});
}

function openCheckout(){
  document.getElementById("checkout").style.display = "block";
  document.getElementById("ref").innerText = "BTG-" + Math.floor(Math.random()*99999);
}

function completeOrder(){
  document.getElementById("receipt").style.display = "block";

  document.getElementById("receipt-content").innerHTML = `
    <h3>Order Complete</h3>
    <p>Total Paid: R${document.getElementById("total").innerText}</p>
  `;
}