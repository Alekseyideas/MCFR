export const StockSlider = ()=>{
    $('.slider-stocks.owl-carousel').owlCarousel({
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
                dots: false,
                items:3
            },
            1400 : {
                items:4,
                dots: false

            }
        }
    });
};