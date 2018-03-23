
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



    $('.callPhone').click(()=>{
        new PopUp('',$('#callBack')).show();
    });
    $('.phoneNumber').mask('+0(000) 000-00-00');
});




