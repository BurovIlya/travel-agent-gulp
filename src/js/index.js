
import autoComplete from '@tarekraafat/autocomplete.js';

import countryList from './helpers/countryList.js';

import { easepick, TimePlugin } from '@easepick/bundle';

import Swiper from 'swiper/bundle';

import ScrollReveal from 'scrollreveal';

import mobileNav from './modules/mobile-nav.js';
mobileNav();

// import styles bundle
import 'swiper/css/bundle';

const breakpoint = window.matchMedia('(max-width:989px)');

let swiper2, swiper3, swiper4, swiperH;

// init Swiper:
const swiper = new Swiper('#swiper-dest', {
 
    slidesPerView: 'auto',
    //slidesOffsetAfter: 304, 
    spaceBetween: 32,

  navigation: {
    nextEl: '.arrows-btn[data-arrows=next]',
    prevEl: '.arrows-btn[data-arrows=back]',
  },

});

const swiper2Config = {
 
  direction: 'vertical',
  slidesPerView: 'auto',
  spaceBetween: 0,
  grabCursor: true,
  ally: false,
  freeMode: true,
  speed: 2250,
  loop: true,
  autoplay: {
    delay: 0.5,
    disableOnInteraction: false
  }
};

swiper2 = new Swiper('#testimonials-col-1', swiper2Config);

const swiper3Config = {
 
  direction: 'vertical',
  slidesPerView: 'auto',
  spaceBetween: 0,
  grabCursor: true,
  ally: false,
  freeMode: true,
  speed: 2500,
  loop: true,
  autoplay: {
    delay: 0.5,
    disableOnInteraction: false
  },


};

swiper3 = new Swiper('#testimonials-col-2', swiper3Config);

const swiper4Config = {
 
  direction: 'vertical',
  slidesPerView: 'auto',
  spaceBetween: 0,
  grabCursor: true,
  ally: false,
  freeMode: true,
  speed: 2750,
  loop: true,
  autoplay: {
    delay: 0.5,
    disableOnInteraction: false
  },


};

swiper4 = new Swiper('#testimonials-col-3', swiper4Config);

const swiperHConfig = {
 
  direction: 'horizontal',
  slidesPerView: 'auto',
  spaceBetween: 16,
  grabCursor: true,
  ally: false,
  freeMode: true,
  speed: 10000,
  loop: true,
  autoplay: {
    delay: 0.0,
    disableOnInteraction: false
  },


};

//swiperH = new Swiper('#testimonial-horizontal-swiper', swiperHConfig);

const breakpointChecker = function () {
  if ( breakpoint.matches === true ) {
    if ( swiper2 !== undefined && swiper3 !== undefined && swiper4 !== undefined ) {
      swiper2.destroy( true, true );
      swiper3.destroy( true, true );
      swiper4.destroy( true, true );
      swiperH = new Swiper('#testimonial-horizontal-swiper', swiperHConfig);
    }
    return;
  } else if ( breakpoint.matches === false && swiperH !== undefined) {
    swiperH.destroy( true, true );
    swiper2 = new Swiper('#testimonials-col-1', swiper2Config);
    swiper3 = new Swiper('#testimonials-col-2', swiper3Config);
    swiper4 = new Swiper('#testimonials-col-3', swiper4Config);
    return;
  }
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();




const autoCompleteJS = new autoComplete({
    selector: '#autoCompleteCountry',
    placeHolder: 'e.g Bali, Indonesia',
    data: {
        src: countryList,
        cashe: true,
    },
    resultItem: {
        highlight: true,
    },
    events: {
        input: {
            selection: (event) => {
                const selection = event.detail.selection.value;
                autoCompleteJS.input.value = selection;
            }
        }
    },
    resultsList: {
        maxResults: 5,
    },
    searchEngine: 'strict',
});

const picker = new easepick.create({
    element: document.getElementById('datepicker'),
    css: [
      'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
      'https://cdn.jsdelivr.net/npm/@easepick/time-plugin@1.2.1/dist/index.css',
    ],
    format: 'HH:mm, DD/MM/YY',
    zIndex: 10,
    plugins: [TimePlugin]
  });
  

  ScrollReveal({
    distance: '60px',
    duration: 2800,
  });

 // ScrollReveal().reveal('.header', {
    //origin: 'top',
  //});

  ScrollReveal().reveal('.discover__picture-product, .discover__title', {
    origin: 'left',
  });

  ScrollReveal().reveal('.discover__picture-scroll, .discover__text', {
    origin: 'right',
  });

  ScrollReveal().reveal('.discover__form', {
    origin: 'bottom',
  });



 