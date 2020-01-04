const clear = document.querySelector("clear");
const list = document.getElementById("list");
const input = document.getElementById("inputVal");
const plsbtn = document.getElementById("plsbtn");

let LIST = [], id = 0;

function addToDo(toDo, id, done, trash){

  if(trash) {return;}

  var source = "";
  if(done) {
    source = "check-circle.png";
  } else {
    source = "circle.png";
  }

  const item = `<li class="item">
                  <img src="${source}" alt="" height="15" width="15" style="display: inline" job="complete" id="${id}">
                  <p class="text" style="display: inline">${toDo}</p>
                  <i class="trash"></i>
                </li>
               `;
  const position = "beforeend";

  list.insertAdjacentHTML(position, item);
}

plsbtn.onclick = function(){
  const toDo = input.value
  if(toDo === "") {
    alert("Please input a value!");
  } else {
    addToDo(toDo, id, false, false);

    LIST.push({
      name: toDo,
      id: id,
      done: false,
      trash: false
    });
  }
  input.value = ""
}
