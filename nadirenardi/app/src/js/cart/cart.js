export const Cart = ()=>{

    const product = {
        btnDel: $('.delete-product'),
        row: $('.page-cart__tr')
    };

    product.btnDel.click(function () {
        $(this).parent().parent().slideUp();
    });


    const radio = $('.page-cart__info-radio');




    function Check(name) {
        const input = radio.find(`input[name="${name}"]`);
        input.each(function () {
            if( $(this).is(':checked')){
                $(this).parents('.page-cart__info-row').addClass('active');
                $(this).parents('.page-cart__info-row').find('.page-cart__info-fields').show();
            }
        });
        input.change(function () {
            const parent = radio.find(`input[name="${name}"]`).parents();
            input.parents().removeClass('active');
            input.parents('.page-cart__info-row').find('.page-cart__info-fields').slideUp();
            $(this).parents('.page-cart__info-row').addClass('active').find('.page-cart__info-fields').slideDown();
        })
    }


    Check('delivery');
    Check('payment');







};