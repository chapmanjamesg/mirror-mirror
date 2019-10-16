console.log('and all the little chicks with the crimson lips go')
console.log('Cleveland Rocks, cleveland rocks, cleveland rocks')

let rightOutputEl = document.getElementById("left-twix")
let leftOutputEl = document.getElementById("right-twix")
let fieldEl = document.getElementById("message")

fieldEl.addEventListener("keyup", function (event) {
    rightOutputEl.innerHTML = event.target.value
})
fieldEl.addEventListener("keyup", function (event) {
    leftOutputEl.innerHTML = event.target.value
})