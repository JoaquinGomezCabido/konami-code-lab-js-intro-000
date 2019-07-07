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
  })
}

init()
