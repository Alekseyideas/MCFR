import {PopUp} from "../PopUps/PopUp";

export const Product = device =>{

    $('.full-product__slider').slick({
        vertical: true,
        infinite: false,
        slidesToShow: 3,
        verticalSwiping: true,
        prevArrow: '<button type="button" class="prev"><i class="ion-ios-arrow-up"></i></button>',
        nextArrow: '<button type="button" class="next"><i class="ion-ios-arrow-down"></i></button>'
    });

    $(document).ready(()=>{

        let sizeChoose = true;
        const btn = $('.full-product__btn-addToCart');
        const id = $('#popSizes');

        $('.full-product__sizes label span').click(()=> {
            sizeChoose = false;
        });

        btn.click(()=>{
            new PopUp(btn,id,sizeChoose).show();
        });

        $('.active .full-product__info-wrapper').show();

        $('.full-product__btn-info').click(function () {
            $(this).parent()
                .toggleClass('active')
                .find('.full-product__info-wrapper').slideToggle(300);
        });


        $('.full-product__mob-slider.owl-carousel').owlCarousel({
            items:1,
            loop: true,
            autoplay: true,
            autoplaySpeed: 1500,
            autoplayTimeout: 6000,
            autoplayHoverPause:true,
            nav: false,
            responsive : {
                700 : {
                    items:2,
                }
            }
        });

        $('.may-like.owl-carousel').owlCarousel({
            items:1,
            loop: true,
            autoplay: true,
            autoplaySpeed: 1500,
            autoplayTimeout: 6000,
            autoplayHoverPause:true,
            nav: false,
            responsive : {
                700 : {
                    items:2,
                },
                1200 : {
                    items:2,
                    dots: false,
                },
                1300 : {
                    dots: false,
                    items:3,
                    nav: false,
                },
            }
        });

        if(device==='mobile'|| device==='tablet'){
            const discount = $('.full-product__discount');
            const textDiscount = $('.full-product__discount-text');
            const slider = $('.full-product__mob-slider');

            const mTop = device==='tablet' ? 83 : 70;

            discount.css('top',slider.offset().top  - mTop + 'px');
            textDiscount.css('top',slider.offset().top - mTop  + 'px');
            console.log(slider.offset().top);
        }

        const img = $('.clickable');
        const image = {
            container: $('.full-product__imgs'),
            btn:   img,
            count:  img.length,
            wrap: $('.full-product__large-photo img'),
            btnPrev: $('.prev-photo'),
            btnNext: $('.next-photo'),
            btnClose: $('.close-photo'),
            current: null,
            changeImage: pos=>{
                $(`.clickable[data-pos="${pos}"]`).click();
            }

        };

        image.btn.click(function () {
           const link = $(this).find('img').attr('src');
            image.current = $(this).data('pos');
            image.container.addClass('largeImg');
            image.wrap.attr('src',link);
        });

        image.btnNext.click(()=>{
            image.current++;
            if( image.current === image.count-1){
                image.current = 1
            }
            image.changeImage(image.current);

        });
        image.btnPrev.click(function () {
            image.current--;
            if (image.current===0)
                image.current = image.count-2;

            image.changeImage(image.current);
        });

        image.btnClose.click(()=>{
            image.container.removeClass('largeImg');
        })

    });



};