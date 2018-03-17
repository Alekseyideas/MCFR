export const Header = (device)=> {


  const selectWrapper = $('.header__select-items');
  const langItem = selectWrapper.find('li a');
  const langWrapper = $('#currentLang');
  const currencyWrapper = $('#currentCurrency');


  let currentLang = $('.header__select--language a.active').text();
  let currentCurrency = $('.header__select--currency a.active').text();

    langWrapper.text(currentLang);
    currencyWrapper.text(currentCurrency);


  langItem.click( function () {
      const item = $(this).parents('.header__select').find('a');

      currentLang = $(this).text();

      currentCurrency = $(this).text();

      if ($(this).parents('.header__select').hasClass('header__select--language')){
          langWrapper.text(currentLang);
      }
      if ($(this).parents('.header__select').hasClass('header__select--currency')){
          currencyWrapper.text(currentCurrency);
      }
      item.removeClass('active');

      $(this).addClass('active');

  });


  const btn_menu = document.getElementById('bar');
  const body = document.getElementsByTagName('body')[0];
  const menu = document.getElementsByClassName('main-menu')[0];
  btn_menu.onclick = ()=> {
    btn_menu.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle('hidden');
  };

  if(device==='mobile' || device === 'tablet'){

      const mobSelect = select => {
          select.click( ()=> {
              select.parents('.header__select').find(selectWrapper).addClass('active');
              body.classList += 'hidden';
          });
      };
      mobSelect(langWrapper);
      mobSelect(currencyWrapper);



      selectWrapper.click(function (e) {
          const target = $(e.target);
          // if(target.is('.header__select-items')){
          //       $('.header__select-items').removeClass('active');
          // }
          selectWrapper.removeClass('active');
          body.classList.remove('hidden');
      })
  }


  const menuItems = $('.main-menu__items li');

  menuItems.each(function () {
    if($(this).find('ul').length){
        $(this).addClass('hasSubmenu');
    }
  });

};






