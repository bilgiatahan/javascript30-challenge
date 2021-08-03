window.addEventListener("keydown",(e)=>{
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`)
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
    if(!audio) return;
    audio.currentTime = 0
    audio.play()
    key.classList.add("playing")
})

const key = document.querySelectorAll(`.key`)
key.forEach(key => key.addEventListener("transitionend",()=>{
    key.classList.remove("playing")
}))