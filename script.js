let cart =[];
let total=0;
const products ={
    1: { name: "Product 1", price: 10 },
    2: { name: "Product 2", price: 20 },
    3: { name: "Product 3", price: 30 }
};

function addToCart(productId){
    const product=products[productId];
    cart.push(product);
    UpdateCart();
}
function UpdateCart(){
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    cart.forEach((product,index)=>{
        const li=document.createElement("li");
        li.textContent = `${product.name} - $${product.price}`;
        cartItems.appendChild(li);
    });
    const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);
document.getElementById("total-price").textContent = totalPrice.toFixed(2);
document.getElementById("cart-count").textContent = cart.length;
}