const serviceBtn = document.querySelector('.services');
const secrviceSection = document.querySelector('.serviceSection');

const missionButton = document.querySelector('.mission');
const missionService = document.querySelector('.missionSection');

const contactBtn = document.querySelector('.contact');
const contactSection = document.querySelector('.contactSection');

const aboutBtn = document.querySelector('.aboutBtn');
const aboutSection = document.querySelector('.aboutSection');

aboutBtn.addEventListener('click', (e) => {
    aboutSection.scrollIntoView({behavior: "smooth"})
})

serviceBtn.addEventListener('click', function(e) {
    secrviceSection.scrollIntoView({behavior:'smooth'})
})

missionButton.addEventListener('click', function(e) {
    missionService.scrollIntoView({behavior: "smooth"})
})

contactBtn.addEventListener('click', function(e) {
    contactSection.scrollIntoView({behavior: 'smooth'});
})