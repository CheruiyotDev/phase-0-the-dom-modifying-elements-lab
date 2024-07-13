const newHeader = document.createElement('h1')
newHeader.id = "victory"
newHeader.textContent = "Evans is the champion"

function removeElement() {
  let main = document.getElementById("main")
  main.remove()
}
removeElement()
