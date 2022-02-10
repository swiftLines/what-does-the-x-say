const foxImg = document.querySelector('#fox')
const foxSays = new Audio('../audio/fox.mp3')

foxImg.addEventListener('click', (evt) => {
  foxSays.volume = .10
  foxSays.play()
})