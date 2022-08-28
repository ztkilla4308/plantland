function sandwichFunction(x) {
  document.getElementById('bar1').classList.toggle('active')
  document.getElementById('bar2').classList.toggle('active')
  document.getElementById('bar3').classList.toggle('active')
  document.getElementById('navlinks-container').classList.toggle('active')
}

let SliderTemp = 0
const sliders = document.getElementsByClassName('slide')

function sliderFunc() {
  sliderBefore()
  for (let i = 0; i < sliders.length; i++) {
    sliders[i].classList.remove('active')
  }
  sliders[SliderTemp].classList.toggle('active')
  setTimeout(() => {
    for (let i = 0; i < sliders.length; i++) {
      sliders[i].classList.remove('before')
    }
  }, 700)
}
function sliderBefore() {
  let beforeSl = document.getElementsByClassName('slide active')
  beforeSl[0].classList.add('before')
}
function nextBtn() {
  if (SliderTemp < sliders.length - 1) {
    SliderTemp++
  } else {
    SliderTemp = 0
  }
  sliderFunc()
}
function prevBtn() {
  if (SliderTemp > 0) {
    SliderTemp--
  } else {
    SliderTemp = sliders.length - 1
  }
  sliderFunc()
}
