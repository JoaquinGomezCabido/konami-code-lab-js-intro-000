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
/*
  let i = 0

  document.body.addEventListener('keydown', (e) => {
    var pressed = e.key
    if(pressed == codes[i]) {
      i++
    } else {
      i = 0
    }

    if(i == 10) {
      alert('Congratulations, you have unlocked the Konami Code!')
      i = 0
    }
  })
}

init()
*/

let index = 0;

document.body.addEventListener("keydown", (thingPressed) => {
  const key = thingPressed.key
  console.log(key)

  if (codes[index] == key) {
    ++index
  }

  else {
    idx = 0
  }

  console.log(index)
  if (index == 10) {
    alert("Hurray!");
    index = 0
  }
});
}

init()
