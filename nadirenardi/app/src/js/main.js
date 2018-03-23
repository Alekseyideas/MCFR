
import {NewsSlider} from "./page-main/News-slider";


let device = '';

const Resize = func =>{
    func();
    window.onresize = ()=>{
        func();
    };
};

const detectDevice = ()=>{
  const mobile = document.getElementById('js-mobile');
  const tablet = document.getElementById('js-tablet');
  const desktop = document.getElementById('js-desktop');

  const getProp = device =>{
      const style = window.getComputedStyle(device);
      return style.getPropertyValue('display');
  };

  if (getProp(mobile)==='block') device = 'mobile';
  if (getProp(tablet)==='block') device = 'tablet';
  if (getProp(desktop)==='block') device = 'desktop';
};

Resize(detectDevice);


const mainHeight = ()=>{
    const main = document.getElementsByTagName('main')[0];
    const footer = document.getElementsByTagName('footer')[0].clientHeight;
    const header = document.getElementsByTagName('header')[0].clientHeight;
    const windowHeight = window.innerHeight;
    main.style.minHeight = windowHeight - header - footer + 'px';
};
Resize(mainHeight);

import {Header} from './header/header';
import {MainSlider} from './page-main/main-slider';
import {HitsSlider} from './page-main/hits-slider';
import {News} from "./page-main/News";
import {StockSlider} from "./page-main/stocks-slider";
import {Footer} from "./footer/footer";
import {Filter} from "./page-category/filter";
import {Product} from "./page-product/product";
import {Cart} from "./cart/cart";
import {Article} from "./page-article/article";
import {Contacs} from "./page-contacts/contacts";
import {Delivery} from "./page-delivery/delivery";
import {PopUp} from "./PopUps/PopUp";


Header(device);
MainSlider();
HitsSlider();
News();
NewsSlider();
StockSlider();
Footer(device);
Filter(device);
Product(device);
Cart();
Article();
Contacs();
Delivery();



$(document).ready(function () {

    $('.showSizes,#size-table').click(function () {
        new PopUp('',$('#rozmirna-sitka')).show();
    });

    $('.header__icon--user,.header__icon--favorite').click(function () {
        new PopUp('',$('#popUpEnter')).show();
    });



    $('.callPhone').click((e)=>{
        e.preventDefault();
        new PopUp('',$('#callBack')).show();
    });
    $('.phoneNumber').mask('+0 (000) 000-00-00');


    $(".room__registration-form,.rem-pass").validate({
    });

    jQuery.extend(jQuery.validator.messages, {
        required: "Заповни, будь ласка, це поле",
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




