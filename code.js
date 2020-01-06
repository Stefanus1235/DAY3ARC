function Add() {
    var emptyornot = inputVal.value
    
    if (emptyornot == "") return 

    else {
    let todotext = document.createElement("input")
    todotext.setAttribute("type","text")
    todotext.setAttribute("value", inputVal.value)
    todotext.classList.add("todotext")
    todotext.disabled = true

    let tick = document.createElement("button")
    tick.classList.add("ticksymbol")
    tick.innerHTML = "&#10003"
    tick.addEventListener("click", function(){
        todotext.classList.toggle("strike")
    })
    
    let tododel = document.createElement("button")
    tododel.classList.add("deleteButton")
    tododel.innerHTML = "&#10005"
    tododel.addEventListener("click", function(){
        container.removeChild(todonotes)
    })
    
    let tanggal = document.createElement("input")
    tanggal.setAttribute("type", "date")
    tanggal.setAttribute("value", Tggl.value)
    tanggal.classList.add("Date")
    tanggal.disabled = true

    let container = document.querySelector(".todolist")

    let todonotes = document.createElement("div")
    
    container.appendChild(todonotes)
    todonotes.appendChild(todotext)
    todonotes.appendChild(tanggal)
    todonotes.appendChild(tick)
    todonotes.appendChild(tododel)
    Tggl.value = ""
    inputVal.value = ""
    }
}


