function playSound(e){
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    console.log(e.keyCode);
    if(!audio){return;}
    audio.currentTime = 0;
    audio.play();
    key.classList.add('highlight');
}
function removeTransition(e){
    if(e.propertyName !== 'transform'){
        return;
    }
    console.log(e);
    this.classList.remove('highlight');
}

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    // }key.addEventListener('transition', removeTransition));
    window.addEventListener('keydown', playSound);