window.addEventListener('keydown', playAudio)
    function playAudio(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
        if(!audio) return
        audio.currentTime = 0
        audio.play()
        const button = document.querySelector(`.key[data-key="${e.keyCode}"]`)
        button.classList.add('playing')
    }

const keys = document.querySelectorAll('.key')
keys.forEach( key => {
    key.addEventListener('transitionend', removeTransition)
} )
    function removeTransition(e) {
        e.propertyName === 'transform' ? e.target.classList.remove('playing') : ''
        console.log(e)
    }