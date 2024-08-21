document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper', {
      spaceBetween: 30,
      effect: 'fade', // Use fade effect
      slidesPerView: 1,
      autoplay: {
        delay: 3000, // Adjust the delay (in milliseconds) as needed
        disableOnInteraction: false, // Allow autoplay to continue even after user interaction
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });
  
  
