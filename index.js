var input = document.querySelector(".new");
var todo = document.querySelector(".todo");
var comp = document.querySelector(".comp");
var trashes = Array.from(document.querySelectorAll(".trash"));
var checks = Array.from(document.querySelectorAll(".check"));
input.addEventListener("keyup", function(e){
	if(e.keyCode == 13 && input.value != '') todoAdd();
});

function todoAdd(){
 let newTask = document.createElement('div');
 let trash = document.createElement('i');
 let check = document.createElement('i');
 trash.setAttribute('class', 'fas fa-trash trash');
 check.setAttribute('class', 'fas fa-check check');
 trashes.push(trash);
 checks.push(check);
 for(let check of checks){
	check.addEventListener("click", function(){
		let newTask = document.createElement('div');
		let trash = document.createElement('i');
		trash.setAttribute('class', 'fas fa-trash trash');
		newTask.textContent = this.parentElement.textContent;
		newTask.setAttribute('class', 'task');
		trashes.push(trash);
		newTask.append(trash);
		this.parentElement.remove();
		comp.append(newTask);
		});
}
//loop the trashes and using this to call parentElement
 for(let trash of trashes){
trash.addEventListener("click",function(){
	console.log(trashes);
	this.parentElement.remove();
});
}
 newTask.textContent = input.value;
 newTask.setAttribute('class', 'task');
 newTask.append(trash, check);
 // set the input value = ''
 input.value='';
 //add to the list
 todo.append(newTask);
}


