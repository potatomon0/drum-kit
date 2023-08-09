function playSound(e) {
    // console.log(e.keyCode)
    //we can select the classname or data attribute (audio) here
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    // console.log(audio)
    if (!audio) return; //stop the function from running altogether
    audio.currentTime = 0;//rewind audio to start on every key press
    audio.play()
    // console.log(key)
    //key.addClass() is from JQuery and is equivalent to key.classList.add()
    // key.addClass('playing') 
    key.classList.add('playing') //we can also do classList.remove(), classList.toggle()

}
function removeTransition(e) {
    // console.log(e)
    if (e.propertyName != "transform") return;//skip it if it's not a transform
    //this is always equal to whatever that called it, in this case the key div itself because line 16 called it
    this.classList.remove('playing')
    // console.log(e.propertyName)
}
const keys = document.querySelectorAll('.key')
// console.log(keys)
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition)
})
window.addEventListener('keydown', playSound)