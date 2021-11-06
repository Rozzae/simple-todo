var userInput = document.getElementById('userInput');
var enterButton = document.getElementById('enterButton');
var ul = document.querySelector("ul");
var listItem = document.getElementsByTagName("li");
var deleteBtn = document.getElementsByClassName("delete-button");

// Function to check if input is empty
function isInputEmpty(){
    if(userInput.value.length > 0){
        return true;
    }
    return false;
}

// Function to add list item
function addListItem(){
    // Create element and add value
    var li = document.createElement("li");
    var listText = document.createTextNode(userInput.value);

    // Create delete button
    var deleteButton = document.createElement("button");
    var deleteText = document.createTextNode("Delete Item");

    deleteButton.appendChild(deleteText);
    deleteButton.classList.add("ml-2", "delete-button");

    li.appendChild(listText);
    li.appendChild(deleteButton);
    li.classList.add("listItem", "mt-2");
    ul.appendChild(li);

    userInput.value = "";
}

// Function to respond to keypress
function createListItem(e){
    if(e.key === 'Enter' && isInputEmpty()){
        addListItem();
    }
}

// Function to respond to button click
function btnCreateListItem(){
    if(isInputEmpty()){
        addListItem();
    }
}

// Function to mark item off or on
function markItem(e){
    var target = e.target;
    if(target.classList[0] && target.classList[0] === "listItem"){
        target.classList.toggle("done");
    }
}

function deleteItem(e){
    var target = e.target;
    if(target.classList[1] === "delete-button"){
        var theElement = e.srcElement;
        
        // Get parent element;
        var theParentElement = theElement.parentElement;
        theParentElement.remove();
    }
}

// Event Listeners
document.addEventListener("click", markItem);
document.addEventListener("click", deleteItem);
enterButton.addEventListener("click", btnCreateListItem)
document.addEventListener("keypress", createListItem);