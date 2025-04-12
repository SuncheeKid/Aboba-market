let cartBody = document.getElementById('cart');
window.addEventListener('click', (event) => {
    console.log('click')
    if(event.target.classList.contains('bb')){
        console.log('клік на кнопку');
        addItems(event.target);
    }
    if(event.target.classList.contains('delete-items')){
        console.log('клік на кнопку видалення товару');
        deleteItems(event.target);
    }
});
let inputCart = document.getElementById('cartFF')
function addCartToForm(id){
    inputCart.value += id + ",";
}

function addItems(element){
    console.log('додавання товару')
    let li = document.createElement('li')
    li.innerHTML = element.dataset.img
                 + element.dataset.name
                 + element.dataset.price
                 + '<div class="delete-items"> X </div>';
  cartBody.appendChild(li);
  addCartToForm(element.dataset.id);
  M.toast({html: 'Товар у кошику', classes: 'rounded'});
}
function deleteItems(element){
    console.log('видалення товару');
    element.parentNode.remove();
}

        
    
