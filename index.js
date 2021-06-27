// showing date and time at the top 
const head = document.querySelector("#header");
var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
//getting day
const weekdays = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' ,'Thrusday' , 'Friday' , 'Saturday'];
var day = weekdays[today.getDay()];
head.innerHTML = day + " " + date;
//styling date and time at the top
//as its a textstored in .head so its a css now



var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 



function createListElement() {
	var li = document.createElement("li"); 
	li.appendChild(document.createTextNode(input.value)); 
	ul.appendChild(li); 
	input.value = ""; 

	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);
	
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	
	function deleteListItem(){
		li.classList.add("delete")
	}
	
}


function addListAfterClick(){
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { 
		createListElement();
	} 
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

