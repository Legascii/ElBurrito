const mobileBtn = document.getElementById('mobile-open');
const nav = document.querySelector('nav');
const mobileBtnExit = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn');
});

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
});

const home = document.querySelector("[data-home]");
const info = document.querySelector("[data-info]");
const review = document.querySelector("[data-review]");
const author = document.querySelector("[data-author]");
const logo = document.querySelector("[data-logo]");

logo.addEventListener('click', () => {
    if (window.scrollY != 0) {
        window.scrollTo(0, 0)
    } else return
})

home.addEventListener('click', () => {
    if (window.scrollY != 0) {
        window.scrollTo(0, 0)
    } else return
    
})


info.addEventListener('click', () => {
    if (window.scrollY != 899) {
        window.scrollTo(0, 899)
    } else return
})

review.addEventListener('click', () => {
    if (window.scrollY != 1760) {
        window.scrollTo(0, 1760)
    } else return
})

author.addEventListener('click', () => {
    if (window.scrollY != 3350) {
        window.scrollTo(0, 3350)
    } else return
})

