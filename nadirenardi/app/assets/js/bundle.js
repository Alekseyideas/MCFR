/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _NewsSlider = __webpack_require__(1);

var _header = __webpack_require__(2);

var _mainSlider = __webpack_require__(3);

var _hitsSlider = __webpack_require__(4);

var _News = __webpack_require__(5);

var _stocksSlider = __webpack_require__(6);

var _footer = __webpack_require__(7);

var _filter = __webpack_require__(8);

var _product = __webpack_require__(9);

var _cart = __webpack_require__(11);

var _article = __webpack_require__(12);

var device = '';

var Resize = function Resize(func) {
    func();
    window.onresize = function () {
        func();
    };
};

var detectDevice = function detectDevice() {
    var mobile = document.getElementById('js-mobile');
    var tablet = document.getElementById('js-tablet');
    var desktop = document.getElementById('js-desktop');

    var getProp = function getProp(device) {
        var style = window.getComputedStyle(device);
        return style.getPropertyValue('display');
    };

    if (getProp(mobile) === 'block') device = 'mobile';
    if (getProp(tablet) === 'block') device = 'tablet';
    if (getProp(desktop) === 'block') device = 'desktop';
};

Resize(detectDevice);

var mainHeight = function mainHeight() {
    var main = document.getElementsByTagName('main')[0];
    var footer = document.getElementsByTagName('footer')[0].clientHeight;
    var header = document.getElementsByTagName('header')[0].clientHeight;
    var windowHeight = window.innerHeight;
    main.style.minHeight = windowHeight - header - footer + 'px';
};
Resize(mainHeight);

(0, _header.Header)(device);
(0, _mainSlider.MainSlider)();
(0, _hitsSlider.HitsSlider)();
(0, _News.News)();
(0, _NewsSlider.NewsSlider)();
(0, _stocksSlider.StockSlider)();
(0, _footer.Footer)(device);
(0, _filter.Filter)(device);
(0, _product.Product)(device);
(0, _cart.Cart)();
(0, _article.Article)();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var NewsSlider = exports.NewsSlider = function NewsSlider() {
    $('.main-mobile-news__slider.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplaySpeed: 1500,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            700: {
                items: 2
            }
        }
    });
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Header = exports.Header = function Header(device) {

  var selectWrapper = $('.header__select-items');
  var langItem = selectWrapper.find('li a');
  var langWrapper = $('#currentLang');
  var currencyWrapper = $('#currentCurrency');

  var currentLang = $('.header__select--language a.active').text();
  var currentCurrency = $('.header__select--currency a.active').text();

  langWrapper.text(currentLang);
  currencyWrapper.text(currentCurrency);

  langItem.click(function () {
    var item = $(this).parents('.header__select').find('a');

    currentLang = $(this).text();

    currentCurrency = $(this).text();

    if ($(this).parents('.header__select').hasClass('header__select--language')) {
      langWrapper.text(currentLang);
    }
    if ($(this).parents('.header__select').hasClass('header__select--currency')) {
      currencyWrapper.text(currentCurrency);
    }
    item.removeClass('active');

    $(this).addClass('active');
  });

  var btn_menu = document.getElementById('bar');
  var body = document.getElementsByTagName('body')[0];
  var menu = document.getElementsByClassName('main-menu')[0];
  btn_menu.onclick = function () {
    btn_menu.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle('hidden');
  };

  if (device === 'mobile' || device === 'tablet') {

    var mobSelect = function mobSelect(select) {
      select.click(function () {
        select.parents('.header__select').find(selectWrapper).addClass('active');
        body.classList += 'hidden';
      });
    };
    mobSelect(langWrapper);
    mobSelect(currencyWrapper);

    selectWrapper.click(function (e) {
      var target = $(e.target);
      // if(target.is('.header__select-items')){
      //       $('.header__select-items').removeClass('active');
      // }
      selectWrapper.removeClass('active');
      body.classList.remove('hidden');
    });
  }

  var menuItems = $('.main-menu__items li');

  menuItems.each(function () {
    if ($(this).find('ul').length) {
      $(this).addClass('hasSubmenu');
    }
  });
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var MainSlider = exports.MainSlider = function MainSlider() {

    $('.main-slider.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplaySpeed: 1500,
        autoplayTimeout: 4000

    });
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var HitsSlider = exports.HitsSlider = function HitsSlider() {

    $('.slider-hits.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplaySpeed: 1500,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        nav: false,
        navText: ['<i class="slider-arrows ion-ios-arrow-left"></i>', '<i class="slider-arrows ion-ios-arrow-right"></i>'],
        responsive: {
            700: {
                items: 2
            },
            1200: {
                dots: false,
                items: 3,
                nav: true
            },
            1400: {
                items: 4,
                dots: false,
                nav: true

            }
        }
    });
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var News = exports.News = function News() {

    var news = {
        left: document.getElementById('newsLeft'),
        right: document.getElementById('newsRight'),
        rightArticle: function rightArticle() {
            return this.right.getElementsByClassName('article');
        },
        leftArticle: function leftArticle() {
            return this.left.getElementsByClassName('article')[0];
        }
    };

    if (news.right) {
        var rightHeight = news.right.offsetHeight;
        news.leftArticle().style.height = rightHeight === 0 ? '700px' : rightHeight + 'px';
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var StockSlider = exports.StockSlider = function StockSlider() {
    $('.slider-stocks.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplaySpeed: 1500,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        nav: false,
        responsive: {
            700: {
                items: 2
            },
            1200: {
                dots: false,
                items: 3
            },
            1400: {
                items: 4,
                dots: false

            }
        }
    });
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Footer = exports.Footer = function Footer(Resize, device) {
    if (device === 'tablet' || device === 'mobile') {
        var toggle = document.querySelectorAll('[data-toggle]');

        for (var i = 0; i < toggle.length; i++) {
            var title = toggle[i].getElementsByClassName('site-map__title')[0];
            title.onclick = function () {
                // const section = this.parentNode.getElementsByClassName('site-map__secIn')[0];
                var section = $(this).parent().find('.site-map__secIn');
                this.classList.toggle('active');
                section.slideToggle();
            };
        }
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Filter = exports.Filter = function Filter(device) {

    var fWrapper = document.getElementById('filter');

    if (device === 'tablet' || device === 'mobile') {

        $(document).ready(function () {
            $('#filter .filter__btn').click(function () {
                $('.filter__items').slideToggle();
            });

            $('.filter__title').click(function () {
                console.log();
                $(this).toggleClass('active').parent().find('ul').slideToggle();
            });
        });
    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Product = undefined;

var _PopUp = __webpack_require__(10);

var Product = exports.Product = function Product(device) {

    $('.full-product__slider').slick({
        vertical: true,
        infinite: false,
        slidesToShow: 3,
        verticalSwiping: true,
        prevArrow: '<button type="button" class="prev"><i class="ion-ios-arrow-up"></i></button>',
        nextArrow: '<button type="button" class="next"><i class="ion-ios-arrow-down"></i></button>'
    });

    $(document).ready(function () {

        var sizeChoose = true;
        var btn = $('.full-product__btn-addToCart');
        var id = $('#popSizes');

        $('.full-product__sizes label span').click(function () {
            sizeChoose = false;
        });

        btn.click(function () {
            new _PopUp.PopUp(btn, id, sizeChoose).show();
        });

        $('.active .full-product__info-wrapper').show();

        $('.full-product__btn-info').click(function () {
            $(this).parent().toggleClass('active').find('.full-product__info-wrapper').slideToggle(300);
        });

        $('.full-product__mob-slider.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplaySpeed: 1500,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            nav: false,
            responsive: {
                700: {
                    items: 2
                }
            }
        });

        $('.may-like.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplaySpeed: 1500,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            nav: false,
            responsive: {
                700: {
                    items: 2
                },
                1200: {
                    items: 2,
                    dots: false
                },
                1300: {
                    dots: false,
                    items: 3,
                    nav: false
                }
            }
        });

        if (device === 'mobile' || device === 'tablet') {
            var discount = $('.full-product__discount');
            var textDiscount = $('.full-product__discount-text');
            var slider = $('.full-product__mob-slider');

            var mTop = device === 'tablet' ? 83 : 70;

            if (slider.length > 0) {
                discount.css('top', slider.offset().top - mTop + 'px');
                textDiscount.css('top', slider.offset().top - mTop + 'px');
            }
        }

        var img = $('.clickable');
        var image = {
            container: $('.full-product__imgs'),
            btn: img,
            count: img.length,
            wrap: $('.full-product__large-photo img'),
            btnPrev: $('.prev-photo'),
            btnNext: $('.next-photo'),
            btnClose: $('.close-photo'),
            current: null,
            changeImage: function changeImage(pos) {
                $('.clickable[data-pos="' + pos + '"]').click();
            }

        };

        image.btn.click(function () {
            var link = $(this).find('img').attr('src');
            image.current = $(this).data('pos');
            image.container.addClass('largeImg');
            image.wrap.attr('src', link);
        });

        image.btnNext.click(function () {
            image.current++;
            if (image.current === image.count - 1) {
                image.current = 1;
            }
            image.changeImage(image.current);
        });
        image.btnPrev.click(function () {
            image.current--;
            if (image.current === 0) image.current = image.count - 2;

            image.changeImage(image.current);
        });

        image.btnClose.click(function () {
            image.container.removeClass('largeImg');
        });
    });
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PopUp = exports.PopUp = function () {
    function PopUp() {
        var btn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        var _this = this;

        var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var toShow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        _classCallCheck(this, PopUp);

        this.id = id;
        var body = $('body');
        var show = toShow;

        this.popUp = {
            btn: btn,
            btnClose: $('.popUp__close-btn'),
            showPopUp: function showPopUp() {
                if (show) {
                    id.addClass('active');
                    body.addClass('hidden');
                }
            },
            closePopUp: function closePopUp() {
                id.removeClass('active');
                body.removeClass('hidden');
            }
        };

        this.popUp.btnClose.click(function () {
            _this.popUp.closePopUp();
        });
    }

    _createClass(PopUp, [{
        key: 'show',
        value: function show() {
            this.popUp.showPopUp();
        }
    }, {
        key: 'close',
        value: function close() {
            this.popUp.closePopUp();
        }
    }]);

    return PopUp;
}();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Cart = exports.Cart = function Cart() {

    var product = {
        btnDel: $('.delete-product'),
        row: $('.page-cart__tr')
    };

    product.btnDel.click(function () {
        $(this).parent().parent().slideUp();
    });

    var radio = $('.page-cart__info-radio');

    function Check(name) {
        var input = radio.find('input[name="' + name + '"]');
        input.each(function () {
            if ($(this).is(':checked')) {
                $(this).parents('.page-cart__info-row').addClass('active');
                $(this).parents('.page-cart__info-row').find('.page-cart__info-fields').show();
            }
        });
        input.change(function () {
            var parent = radio.find('input[name="' + name + '"]').parents();
            input.parents().removeClass('active');
            input.parents('.page-cart__info-row').find('.page-cart__info-fields').slideUp();
            $(this).parents('.page-cart__info-row').addClass('active').find('.page-cart__info-fields').slideDown();
        });
    }

    Check('delivery');
    Check('payment');
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Article = exports.Article = function Article() {
    $('.slider-article.owl-carousel').owlCarousel({
        items: 1,
        margin: 10,
        autoHeight: true
    });
};

/***/ })
/******/ ]);