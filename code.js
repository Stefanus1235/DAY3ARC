function Add() {
    var emptyornot = inputVal.value
    
    if (emptyornot == "") return 

    else {
    let todotext = document.createElement("input") <!--> Bikin elemen input dengan value yang diisi pengguna. -->
    todotext.setAttribute("type", "text")
    todotext.setAttribute("value", inputVal.value)
    todotext.classList.add("todotext")
    todotext.disabled = true
    
    let tododel = document.createElement("button") <!-- Bikin elemen button Delete -->
    tododel.classList.add("deleteButton")
    tododel.innerHTML = "Delete"
    tododel.addEventListener("click", function(){
        container.removeChild(todonotes)
    })
    
    let tanggal = document.createElement("input") <!-- Bikin elemen tanggal, dengan value sesuai input pengguna. -->
    tanggal.setAttribute("type", "date")
    tanggal.setAttribute("value", Tggl.value)
    tanggal.classList.add("Date")
    tanggal.disabled = true

    let container = document.querySelector(".todolist") <!-- set variabel container, yang merupakan div dengan kelas todolist -->

    let todonotes = document.createElement("div") <!-- set elemen div yang akan ditambahkan kedalam container -->
    
    container.appendChild(todonotes) <!-- Tambahkan div todonotes ke container, dengan todonotes berisi input text, tanggal, dan button -->
    todonotes.appendChild(todotext)
    todonotes.appendChild(tanggal)
    todonotes.appendChild(tododel)
    Tggl.value = "" <!-- reset input Tanggal -->
    inputVal.value = "" <!-- reset input text todo -->
    }


}


