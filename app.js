// click sound
const audio = new Audio ('./button-20.mp3')
const button = document.querySelector('button')

button.addEventListener('click', function() {
  audio.play()
})
// click sound end

