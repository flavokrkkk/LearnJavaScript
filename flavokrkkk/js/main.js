const menuBtn= document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.menu-mobile');
const scrollING = document.querySelector('.promo__arrow');

  scrollING.addEventListener('click', () => {
  document.documentElement.scrollBy(0, 500);
})

    

menuBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('menu--open');
  console.log('fhr')
});



const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
    },
    breakpoints:{
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      }
    }
  
  });

  

