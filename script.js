const root = document.querySelector('html')

// Real cursor element
const cursor = document.createElement('div')
cursor.classList.add('cursor')
root.appendChild(cursor)

// Following extra cursor element
const follower = document.createElement('div')
follower.classList.add('cursor', 'cursor__follower')
root.appendChild(follower)


root.addEventListener('mousemove', (e) => {
  setPosition(follower, e)
  setPosition(cursor, e)
})

function setPosition(element, e) {
  element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
}

const text = document.getElementById("text")

text.addEventListener("mouseover", function(){
  text.style.color = "#279EFF "
  text.style.transition = "all"
  text.style.animation = "ease in out"
})

text.addEventListener("mouseout" , function(){
  text.style.color = "#F2F2F2F2"
})