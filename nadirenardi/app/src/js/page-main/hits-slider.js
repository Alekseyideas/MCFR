
export const HitsSlider = ()=>{


    $('.slider-hits.owl-carousel').owlCarousel({
        items:1,
        loop: true,
        autoplay: true,
        autoplaySpeed: 1500,
        autoplayTimeout: 6000,
        autoplayHoverPause:true,
        nav: false,
        navText: ['<i class="slider-arrows ion-ios-arrow-left"></i>','<i class="slider-arrows ion-ios-arrow-right"></i>'],
        responsive : {
            700 : {
                items:2,
            },
            1200 : {
                dots: false,
                items:3,
                nav: true,
            },
            1400 : {
                items:4,
                dots: false,
                nav: true,

            }
        }
    });

};
