import {Tab} from "../tabs/Tabs";

export const Contacs = ()=>{
    new Tab('.tab','.tab-info');

    const wrapper= $('.shop-container__city');
    const city = $('.shop-container__city-title');
    const shops = $('.shop-container__shops');
    const title = $('#curTab');

    $('#curTab').text($('.tab.active').text());

    $('.tab').click(function () {
        $('#curTab').text($(this).text());
    });
    city.click(function () {

        if(!$(this).hasClass('active')){
            shops.slideUp();
            city.removeClass('active');
        }
        $(this).addClass('active');



        $(this).parent().find(shops).slideDown();
    })


};