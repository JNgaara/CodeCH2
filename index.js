let  shoppingList = document.getElementById('ShoppingList');
shoppingList.addEventListener('submit', addItem);
function addItem(e){
    e.preventDefault();
    let data = this.elements.ShoppingListInput.value;
    let list = document.querySelector('ol');
    let item = document.createElement('li');
    let text = document.createElement('p');

    text.textContent = data;
    this.elements.ShoppingListInput.value= "";
    item.append(text);
    list.append(item);

    let rmvBtn = document.createElement('span');
    rmvBtn.classList.add('remove');
    item.append(rmvBtn);
    rmvBtn.addEventListener('click',deleteItem);
    item.addEventListener('click', doneItem);

}

function deleteItem(e){
    this.parentElement.remove();
}

function doneItem(e){
    this.classList.toggle('done');
}