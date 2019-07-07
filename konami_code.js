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

  check.addEventListener('keydown', function(e) {
    for(var a = 0, a < 10; a++) {
      if(e.key === codes[a]) {
        if(a === 9) {
          alert('Congratulations, you have unlocked the Konami Code!')
        } else {
          continue
        }
      } else {
        break
      }
    }
  })
}

init()
