['DOMDocumentReady', 'scroll', 'resize'].forEach(event => {
    window.addEventListener(event, () => {
        customTransform()
    })
})

const customTransform = () => {
    let flag = true

    const scrollItem = document.querySelector('.scroll')
    const scrollItems = scrollItem.querySelector('.scroll_items')

    if (isInViewport(scrollItem)) {
        let offset = window.pageYOffset
        scrollItems.style.transform = `translateX(${25 - offset / 25}%)`
    }
}

const isInViewport = element => {
    const elementTop = element.offsetTop;
    const elementBottom = elementTop + element.offsetHeight;
    const viewportTop = window.pageYOffset || document.documentElement.scrollTop;
    const viewportBottom = viewportTop + window.innerHeight;
    return elementBottom > viewportTop && elementTop < viewportBottom;
}


const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});