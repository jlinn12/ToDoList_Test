const submitBtn = document.getElementById('submitBtn');
const list = document.getElementById('MyUL')
const input = document.getElementById('input')

submitBtn.addEventListener("click", () => {
    const listNode = document.createElement('li');
    const newItemList = input.value;

    if (input.value === "") {
        alert("Please enter an item")  
    }

    var t = document.createTextNode(newItemList);
    listNode.appendChild(t);
    list.appendChild(listNode);
    input.focus();

});

