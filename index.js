var swiper = new Swiper('.swiper-container', {
    autoplay: 5000,
    speed: 900,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    // pagination: '.swiper-pagination',
    paginationClickable: true,
    // Disable preloading of all images
    preloadImages: false,
    lazyLoadingInPrevNext: true,
    lazyLoadingInPrevNextAmount: 3,
    // Enable lazy loading
    lazyLoading: true,
    grabCursor: true,
    keyboardControl: true
});

var swiperElement = document.querySelector('.swiper-container');
var playingElement;
swiper.on('slideChangeStart', function() {
  if (playingElement) {
    playingElement.pause();
  }

  playingElement = swiperElement.querySelector('.swiper-slide-active audio, .swiper-slide-active video');
  if (playingElement) {
    playingElement.play();
  }
});
