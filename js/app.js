const foxImg = document.querySelector('#fox')
const notFox = document.querySelector('#not-fox')
const foxSays = new Audio('../audio/fox.mp3')

foxImg.addEventListener('click', (evt) => {
  foxSays.volume = .10
  foxSays.play()
})

notFoxImg.addEventListener('click', (evt) => {
  if (evt.target.id !== 'not-fox') {
    const audioElement = new Audio(`../audio/${evt.target.id}.mp3`)
    audioElement.volume = .1
    audioElement.play()
  }
})