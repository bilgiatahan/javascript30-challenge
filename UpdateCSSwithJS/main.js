const blurValue = document.querySelector("#blur")
const scale = document.querySelector("#scale")
const color = document.querySelector("#color")
const image = document.querySelector("#picture")
const imageContainer = document.querySelector(".img-container")

blurValue.addEventListener("input", () => {
    image.style.filter = `blur(${blurValue.value}px)`
})
color.addEventListener("change", () => {
    // imageContainer.style.backgroundColor = `${color.value}`
    document.documentElement.style.setProperty('--bgColor', `${color.value}`);
})
scale.addEventListener("input", () => {
    console.log(scale.value)
    image.style.transform = `scale(${scale.value})`
})