let CountEl = document.getElementById("count-el")
let count = 0
function increase() {
   count +=1
    CountEl.textContent = count
    countEl.textContent = 0
}

let saveEL = document.getElementById("save-el")
function save() {
    let saveELm = count
    let info = " Students attended"
    saveEL.textContent = count + info
    count.textContent = 0
    count = 0
}
