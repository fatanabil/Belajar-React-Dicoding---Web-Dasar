window.onscroll = function (_) {
    let scroll = window.scrollY;
    let nav = document.querySelector('nav');
    let btp = document.querySelector('#backToTop');
    if (scroll > 200) {
        nav.classList.add('not-top');
        btp.classList.remove('diss');
    } else {
        nav.classList.remove('not-top');
        btp.classList.add('diss');
    }
}

let culinarySlides = document.querySelectorAll('.culinary-content');
let currentIndex1 = 0;

const cycleCulinarySlides = () => {
    if (culinarySlides[currentIndex1].classList.contains('content-active')) {
        culinarySlides[currentIndex1].classList.remove('content-active');
        if (currentIndex1 + 1 === culinarySlides.length) {
            currentIndex1 = -1;
        }
        culinarySlides[currentIndex1 + 1].classList.add('content-active');
        currentIndex1++;
    }
}

setInterval(cycleCulinarySlides, 10000);

let tourismSlides = document.querySelectorAll('.tourism-content');
let currentIndex2 = 0;

const cycleTourismSlides = () => {
    if (tourismSlides[currentIndex2].classList.contains('content-active')) {
        tourismSlides[currentIndex2].classList.remove('content-active');
        if (currentIndex2 + 1 === tourismSlides.length) {
            currentIndex2 = -1;
        }
        tourismSlides[currentIndex2 + 1].classList.add('content-active');
        currentIndex2++;
    }
}

setInterval(cycleTourismSlides, 10100);

let year = document.querySelector('#year');
year.innerText = new Date().getFullYear()