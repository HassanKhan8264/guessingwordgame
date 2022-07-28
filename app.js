// click sound
const audio = new Audio ('./button-20.mp3')
const button = document.getElementById('button')

button.addEventListener('click', function() {
  audio.play()
})
// click sound end



