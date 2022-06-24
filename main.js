//add event listener to listen to keydown event
//play sound associated with the data-key of each element
//add trasition to the keys by adding the class already designated for such in the stykesheet
//removed added features upon sound play ending

window.addEventListener( 'keydown', playSound )
function playSound( e ) {
    const audio = document.querySelector( `audio[data-key="${e.keyCode}"]` ); //selects elements by using the custom data attribute of html
    //console.log(audio)
    if(!audio) return; //this means if the key pressed has not selected using the custom data attribute by querySelector, then do nothing
    audio.currentTime = 0 //this ensures that on each keydown event the current audio play time is set to zero so as to allow new sound to be played using the play() method.
    audio.play() // plays audio associated with element selected using the custom data attribute. Please note that by default, the play() method cannot trigger a play on the same element while an audio is still playing. You have to wait till the audio is done playing to triger the play method again.
    const keyButton = document.querySelector( `.key[data-key="${e.keyCode}"]` ); //selects elements by using the custom data attribute of html
    if(!keyButton) return; //this means if the key buttona pressed has not selected using the custom data attribute by querySelector, then do nothing
    keyButton.classList.add( 'playing' ) //adds the class playing to press key
}

window.addEventListener( 'click', playSoundClick )
function playSoundClick( e ) {
    if(!e.target.matches('.key')) { //if target clicked does not have the class "key" then do nothing
        return
    } else{ 
        const drumClasses = e.target.classList //collects the classes contained inside of clicked target in an array
        const drumTypeValue =  drumClasses[0]//selects the first string value in the array above which is the drum type class' text
        const audio = document.querySelectorAll( `.${drumTypeValue}` )[1] //using the drum type text as a class argument to select asssociated audio to be played
        audio.currentTime = 0
        audio.play()
        const button = document.querySelectorAll( `.${drumTypeValue}` )[0]
        console.log(button)
        button.classList.add('playing')
    }
}

const keyButtons = document.querySelectorAll('.key')
keyButtons.forEach( key => {
    key.addEventListener( 'transitionend', removeTransition )
} )
function removeTransition(e) {
    //console.log(this) // notice the diffrence between the 'this' keyword and and the key paramenter. 'this' represents the element the event is added 'transitionend' is added to
    console.log(e) //key parameter is the effect of transitionend event on each 'this'/element 
    if(this.propertyName !== 'transform') {
        this.classList.remove('playing')
        //alternatively we can use e.target.classList.remove('playing')
    }
}


