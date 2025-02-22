const DEFAULT = 0
let counter = DEFAULT // state - Model

window.addEventListener('DOMContentLoaded', function() {
  this.document.querySelector('#btnDecr').addEventListener('click', () => handleDecreaseClick())
  this.document.querySelector('#btnReset').addEventListener('click', handleResetClick)
  this.document.querySelector('#btnIncr').addEventListener('click', () => handleIncreaseClick())
})

/**
 * Handler - Controller
 */

function handleDecreaseClick() {
  decreaseClicked()
}

function handleResetClick() {
  resetClicked()
}

function handleIncreaseClick() {
  increaseClicked()
}

/**
 * Model
 */

function decreaseClicked() {
  counter--
  render()
}

function resetClicked() {
  counter = DEFAULT
  render()
}

function increaseClicked() {
  counter++
  render()
}


/**
 * View
 */
function render() {
  const counterDOM = document.querySelector('#counter')
  counterDOM.textContent = counter
  styleCounterDOM(counterDOM)
}

function styleCounterDOM(counterDOM) {
  counterDOM.classList.toggle('text-[#008000]', counter > 0)
  counterDOM.classList.toggle('text-[#000000]', counter === 0)
  counterDOM.classList.toggle('text-[#FF0000]', counter < 0)
}