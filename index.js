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

var playingElement;
function getPlayingElement() {
  playingElement = swiperElement.querySelector('.swiper-slide-active audio, .swiper-slide-active video');
}

var swiperElement = document.querySelector('.swiper-container');
swiper.on('slideChangeStart', function() {
  if (playingElement) {
    playingElement.pause();
  }

  getPlayingElement();

  if (playingElement) {
    playingElement.play();
  }

  var blurElements = swiperElement.querySelectorAll('.blur');
  Array.prototype.forEach.call(blurElements, function(blurElement) {
    blurElement.hidden = false;
  });
});

window.onload = function() {
    getPlayingElement();
};

window.addEventListener('keydown', function(event) {
    if(event.keyCode === 32) {
        if (playingElement) {
            if (playingElement.paused) {
                playingElement.play();
            }
            else {
                playingElement.pause();
            }
        }
        else {
          var blurElements = swiperElement.querySelectorAll('.blur');
          Array.prototype.forEach.call(blurElements, function(blurElement) {
            blurElement.hidden = !blurElement.hidden;
          });
        }
    }
});
