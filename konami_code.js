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

  var check = document.querySelector('body')

  let i = 0

  check.addEventListener('keydown', function(e) {

    if(e.key == codes[i]) {
      i++
      if(i === 9) {
        alert('Congratulations, you have unlocked the Konami Code!')
      }
    } else {
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
