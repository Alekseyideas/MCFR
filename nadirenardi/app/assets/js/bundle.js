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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
        var popUpBody = $('.popUp__wrapper');
        this.popUp = {
            wrapper: $('.popUp'),
            btn: btn,
            btnClose: $('.popUp__close-btn'),
            showPopUp: function showPopUp() {
                if (show) {
                    id.addClass('active');

                    body.addClass('hidden');
                    setTimeout(function () {
                        id.find(popUpBody).addClass('active');
                    }, 400);
                }
            },
            closePopUp: function closePopUp() {
                id.find(popUpBody).removeClass('active');
                setTimeout(function () {
                    id.removeClass('active');
                    body.removeClass('hidden');
                }, 600);
            }
        };

        this.popUp.btnClose.click(function () {
            _this.popUp.closePopUp();
        });

        this.popUp.wrapper.click(function (e) {
            if ($(e.target).is(_this.popUp.wrapper)) {
                _this.popUp.closePopUp();
            }
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _NewsSlider = __webpack_require__(2);

var _header = __webpack_require__(3);

var _mainSlider = __webpack_require__(4);

var _hitsSlider = __webpack_require__(5);

var _News = __webpack_require__(6);

var _stocksSlider = __webpack_require__(7);

var _footer = __webpack_require__(8);

var _filter = __webpack_require__(9);

var _product = __webpack_require__(10);

var _cart = __webpack_require__(11);

var _article = __webpack_require__(12);

var _contacts = __webpack_require__(13);

var _delivery = __webpack_require__(15);

var _PopUp = __webpack_require__(0);

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
(0, _contacts.Contacs)();
(0, _delivery.Delivery)();

$(document).ready(function () {

    $('.showSizes,#size-table').click(function () {
        new _PopUp.PopUp('', $('#rozmirna-sitka')).show();
    });

    $('.header__icon--user,.header__icon--favorite').click(function () {
        new _PopUp.PopUp('', $('#popUpEnter')).show();
    });

    $('.callPhone').click(function (e) {
        e.preventDefault();
        new _PopUp.PopUp('', $('#callBack')).show();
    });
    $('.phoneNumber').mask('+0 (000) 000-00-00');

    $(".room__registration-form,.rem-pass").validate({});

    jQuery.extend(jQuery.validator.messages, {
        required: "Заповни, будь ласка, це поле"
        //  remote: "Please fix this field.",
        // email: "Please enter a valid email address.",
        // url: "Please enter a valid URL.",
        // date: "Please enter a valid date.",
        // dateISO: "Please enter a valid date (ISO).",
        // number: "Please enter a valid number.",
        // digits: "Please enter only digits.",
        // creditcard: "Please enter a valid credit card number.",
        // equalTo: "Please enter the same value again.",
        // accept: "Please enter a value with a valid extension.",
        // maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
        //minlength: jQuery.validator.format("Please enter at least {0} characters."),
        //rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
        //range: jQuery.validator.format("Please enter a value between {0} and {1}."),
        // max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
        //min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
    });
});

/***/ }),
/* 2 */
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
/* 3 */
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
/* 4 */
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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Product = undefined;

var _PopUp = __webpack_require__(0);

var Product = exports.Product = function Product(device) {

    $('.full-product__slider').slick({
        vertical: true,
        infinite: true,
        slidesToShow: 4,
        verticalSwiping: true,
        prevArrow: '<button type="button" class="prev"><i class="ion-ios-arrow-up"></i></button>',
        nextArrow: '<button type="button" class="next"><i class="ion-ios-arrow-down"></i></button>',
        responsive: [{
            breakpoint: 1850,
            settings: {
                slidesToShow: 3
            }
        }]
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

        $('.popUp__info span').click(function () {
            new _PopUp.PopUp(btn, id, sizeChoose).close();
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

        var num = img.map(function () {
            return $(this).data('pos');
        });

        var highest = Math.max.apply(Math, num);

        var image = {
            container: $('.full-product__imgs'),
            btn: img,
            count: highest,
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
            if (image.current === image.count + 1) {
                image.current = 1;
            }
            image.changeImage(image.current);
        });
        image.btnPrev.click(function () {
            image.current--;
            if (image.current === 0) image.current = image.count;

            image.changeImage(image.current);
        });

        image.btnClose.click(function () {
            image.container.removeClass('largeImg');
        });
    });
};

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

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Contacs = undefined;

var _Tabs = __webpack_require__(14);

var Contacs = exports.Contacs = function Contacs() {
    new _Tabs.Tab('.tab', '.tab-info');

    var wrapper = $('.shop-container__city');
    var city = $('.shop-container__city-title');
    var shops = $('.shop-container__shops');
    var title = $('#curTab');

    $('#curTab').text($('.tab.active').text());

    $('.tab').click(function () {
        $('#curTab').text($(this).text());
    });
    city.click(function () {

        if (!$(this).hasClass('active')) {
            shops.slideUp();
            city.removeClass('active');
        }
        $(this).addClass('active');

        $(this).parent().find(shops).slideDown();
    });
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tab = exports.Tab = function Tab(btn, content) {
    _classCallCheck(this, Tab);

    var button = $('' + btn);
    var activeButton = $(btn + '.active');
    var tab = {
        btn: button,
        btnData: button.data('tab'),
        activeBtnData: activeButton.data('tab'),
        info: content,
        showTab: function showTab(tab, slug) {
            $(tab + '--' + slug).addClass('active');
        },
        hideTab: function hideTab(tab) {
            $('' + tab).removeClass('active');
        }
    };

    $(tab.info + '--' + tab.activeBtnData).addClass('active');

    button.click(function () {
        button.removeClass('active');

        $(this).addClass('active');

        tab.hideTab(tab.info);

        tab.activeBtnData = $(this).data('tab');

        tab.showTab(tab.info, tab.activeBtnData);
    });
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Delivery = exports.Delivery = function Delivery() {
    var wrapper = $('.toggle');
    var btn = $('.toggle__title');
    var container = $('.toggle__text');

    btn.click(function () {

        if (!$(this).hasClass('active')) {
            container.slideUp();
            btn.removeClass('active');
        }
        $(this).addClass('active');

        $(this).parent().find(container).slideDown();
    });
};

/***/ })
/******/ ]);