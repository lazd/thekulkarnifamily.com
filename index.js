var swiperConfig = {
    //autoplay: 5000,
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
    keyboardControl: true,
    effect: 'cube',
    grabCursor: true,
    cube: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
    }
};

// Disable effects for mobile, it crashes Safari
if ('ontouchstart' in window) {
  delete swiperConfig.effect;
}

var swiper = new Swiper('.swiper-container', swiperConfig);

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
