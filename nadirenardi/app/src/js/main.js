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

Header(device);
MainSlider();
HitsSlider();
News();
NewsSlider();
StockSlider();
Footer(device);
Filter();