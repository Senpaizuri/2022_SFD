window.addEventListener('load',()=>{
    document.querySelector('main').classList.remove('hidden')
})

const closeButtons = document.querySelectorAll('.js-close');

const hideParent = (element)=>{
    element.parentElement.classList.add('hidden')
}

const nextStep = document.querySelector('.next')
const prevStep = document.querySelector('.prev')
const mapContainer = document.querySelector('[data-step]')
let curStep = 0

nextStep.addEventListener('click',()=>{
    changeStep(1)
})

prevStep.addEventListener('click',()=>{
    curStep !== 0 && changeStep(-1)
})

const changeStep = (value,reset = false)=>{
    reset ? curStep = 0 : curStep += value
    mapContainer.setAttribute('data-step',curStep)
}

closeButtons.forEach(el=>{
    el.addEventListener('click',()=>{
        hideParent(el)
    })
})