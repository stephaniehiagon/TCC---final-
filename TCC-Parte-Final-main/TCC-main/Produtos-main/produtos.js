var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function(){
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
    MainImg.src = smallimg[3].src;
}

document.querySelectorAll(".botao").forEach(button => 
    button.addEventListener("click", e => {
        if(!button.classList.contains("loading")){
            button.classList.add("loading");
            setTimeout(() => button.classList.remove("loading"), 3700)
        }
        e.preventDefault();
    })
)

//CART
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

cartIcon.onclick = () =>{
    cart.classList.add("active");
}
 
closeCart.onclick = () =>{
    cart.classList.remove("active");
}

if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}else{
    ready();
}

function ready(){
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    var qntInputs = document.getElementsByClassName('cart-qnt');
    for (var i = 0; i < qntInputs.length; i++){
        var input = qntInputs[i];
        input.addEventListener('change', qntChanged);
    }
    var addCart = document.getElementsByClassName('botao'); 
    for (var i = 0; i < addCart.length; i++){
        var button = addCart[i];
        button.addEventListener('click', addCartClicked);
    }
    //Botao
    document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyButtonClicked);
}
function buyButtonClicked(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();
}

function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

function qntChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatetotal();
}

function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName('t1')[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    //var productImg = shopProducts.getElementsByClassName('Img2')[0].src;
    addProductToCart(title, price); 
    updatetotal(); 
}

function addProductToCart(title, price){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsNames.length; i++){
        if (cartItemsNames[i].innerText == title){
            alert("Você já adicionou este item ao carrinho");
            return;
        }
    }
    var cartBoxContent = `
                        <img src="fone2.2.png" class="cart-img" width="190px" height="140px">
                        <div class="detail-box">
                            <div class="cart-product-title">${title}</div>
                            <div class="cart-preco">R$ 349,00</div>
                            <input type="number" value="1" class="cart-qnt">
                        </div>
                        <!--Remover Cart-->
                        <img src="lixo.png" class="cart-remove" width="23px" height="23px">`;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem);
    cartShopBox.getElementsByClassName("cart-qnt")[0].addEventListener("change", qntChanged);
}

function updatetotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-preco')[0];
        var qntElement = cartBox.getElementsByClassName('cart-qnt')[0];
        var price = parseFloat(priceElement.innerText.replace('R$','')); 
        var qnt = qntElement.value; 
        total = total + price * qnt;
    }    
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('total-preco')[0].innerText = 'R$' + total; 
}

//Botão

