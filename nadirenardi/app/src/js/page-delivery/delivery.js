export const Delivery = ()=>{
    const wrapper= $('.toggle');
    const btn = $('.toggle__title');
    const container = $('.toggle__text');


    btn.click(function () {

        if(!$(this).hasClass('active')){
            container.slideUp();
            btn.removeClass('active');
        }
        $(this).addClass('active');



        $(this).parent().find(container).slideDown();
    })
};
