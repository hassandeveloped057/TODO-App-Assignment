
function addtodo(){
    var input = document.getElementById("todo-input");
    console.log(input.value);

    var list = document.getElementById("listItems");
    var listElement = document.createElement("li");
    listElement.classList.add("list");

    var listText = document.createTextNode(input.value); 
    listElement.appendChild(listText);
    
    // ******************Deletebtn*************************************
    var delBtn = document.createElement("button");
    var delBtnText = document.createTextNode("Delete");
    delBtn.classList.add("deletestyle");

    delBtn.appendChild(delBtnText);
    delBtn.setAttribute("onclick", "delTodo(this)");
   listElement.appendChild(delBtn);
   
   
    // ******************Editbtn*************************************
    var editBtn = document.createElement("button");
    var editBtnText = document.createTextNode("Edit");
    editBtn.classList.add("editstyle");
    editBtn.appendChild(editBtnText);
    listElement.appendChild(editBtn);
        list.appendChild(listElement);
    
        editBtn.setAttribute("onclick", "editTodo(this)");

    console.log(listElement);
    input.value = "";
}
function deletetodo(){
    var list = document.getElementById("listItems");

    list.remove();
}

function delTodo(e){
    console.log(e.parentNode.remove());
}

function editTodo(e){
    var currentLi = e.parentNode.firstChild.nodeValue;
    var inputField = prompt("Enter updated value" , currentLi);
    e.parentNode.firstChild.nodeValue = inputField
}


