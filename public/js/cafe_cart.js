let cart = [];
function addToCart(item) {
    cart.push(item);
    renderCart();
}
function renderCart() {
    const list = document.getElementById('cartItems');
    if(!list) return;
    list.innerHTML = '';
    cart.forEach(i => {
        const li = document.createElement('li');
        li.textContent = i.name + ' - $' + i.price;
        list.appendChild(li);
    });
}
