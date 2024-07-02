

// ************************************************* //
// * +++++++++++++ 02. Header sticky & navbar ++++++++++++++ * //
// ************************************************* //

$(window).on('scroll', function() {
  if($(this).scrollTop() > 250 ) {
    $(".kt-page__header").addClass("fixed__header");
    $(".header-top").slideUp();
  } else {
    $(".kt-page__header").removeClass("fixed__header");
    $(".header-top").slideDown();
  }
});

Fancybox.bind('[data-fancybox="gallery-1"]', {
  caption: function (fancybox, slide) {
    const figurecaption = slide.triggerEl?.querySelector(".tab-caption");
    return figurecaption ? figurecaption.innerHTML : slide.caption || "";
  },
});
Fancybox.bind('[data-fancybox="gallery-2"]', {
  caption: function (fancybox, slide) {
    const figurecaption = slide.triggerEl?.querySelector(".tab-caption");
    return figurecaption ? figurecaption.innerHTML : slide.caption || "";
  },
});
Fancybox.bind('[data-fancybox="gallery-3"]', {
  caption: function (fancybox, slide) {
    const figurecaption = slide.triggerEl?.querySelector(".tab-caption");
    return figurecaption ? figurecaption.innerHTML : slide.caption || "";
  },
});


var mensSquadSwiper = new Swiper(".kt-squad__kings-swiper", {
  autoPlay: false,
  spaceBetween: "15px",
  // grid: {
  //   rows: 2,
  //   fill: "row",
  // },
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    480: {
      slidesPerView: 2.5
    },
    768: {
      slidesPerView: 2.5
    },
    1024: {
      slidesPerView: 2
    }
  }
});

var womensSquadSwiper = new Swiper(".kt-squad__kueens-swiper", {
  autoPlay: false,
  spaceBetween: "15px",
  loop: true,
  // grid: {
  //   rows: 2,
  //   fill: "row",
  // },
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    480: {
      slidesPerView: 2.5
    },
    768: {
      slidesPerView: 2.5
    },
    1024: {
      slidesPerView: 2
    }
  }
});
var fixturesSwiper = new Swiper(".kt-fixtures__matches-swiper", {
  direction: "vertical",
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    480: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

$('.popup-youtube').magnificPopup({
  type: 'iframe',
  iframe: {
    patterns: {
      youtube: {
        index: 'youtube.com/',
        id: function (url) {
          var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
          if (!m || !m[1]) return null;
          return m[1];
        },
        src: '//www.youtube.com/embed/%id%?autoplay=1'
      },
      vimeo: {
        index: 'vimeo.com/',
        id: function (url) {
          var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
          if (!m || !m[5]) return null;
          return m[5];
        },
        src: '//player.vimeo.com/video/%id%?autoplay=1'
      }
    }
  }
});