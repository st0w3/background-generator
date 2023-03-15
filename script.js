var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteItems = Array.from(document.getElementsByClassName("delete"));
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var span = document.createElement("span");
	span.setAttribute("class", "delete");
	span.innerText = " X ";
	span.addEventListener("click", deleteItemAfterClick);
	li.appendChild(span);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function deleteItemAfterClick(event){
	event.srcElement.parentElement.remove();
}

deleteItems.forEach(element => {
	element.addEventListener("click", deleteItemAfterClick)
});

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);