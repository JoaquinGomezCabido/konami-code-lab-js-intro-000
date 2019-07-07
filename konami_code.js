const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here

  let i = 0

  document.body.addEventListener('keydown', (e) => {
    var pressed = e.key
    if(pressed == codes[i]) {
      i++
    } else {
      i = 0
    }

    if(i === 9) {
      alert('Congratulations, you have unlocked the Konami Code!')
      i = 0
    }

    /*
    for(var i = 0; i < 10; i++) {
      if(e.key === codes[i]) {
        if(i === 9) {
          alert('Congratulations, you have unlocked the Konami Code!')
        } else {
          continue
        }
      } else {
        break
      }
    }
    */
  })
}

init()
