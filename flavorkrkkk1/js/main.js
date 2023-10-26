const btn = document.querySelector('.button');

$(function(){
  $('.slider').slick({
     arrows: false,
     fade: true,
     autoplay:3000,
     dots: true
  });


  $('.header-btn').on('click', function(){
      $('.menu').addClass('active');
  });

  $('.close-btn').on('click', function(){
    $('.menu').removeClass('active');
  });
});



btn.addEventListener('click', function(){
  document.documentElement.scrollBy(0, 550);
  console.log("fff")
})