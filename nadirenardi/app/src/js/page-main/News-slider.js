export const NewsSlider = () => {
    $('.main-mobile-news__slider.owl-carousel').owlCarousel({
        items:1,
        loop: true,
        autoplay: true,
        autoplaySpeed: 1500,
        autoplayTimeout: 4000,
        autoplayHoverPause:true,
        responsive : {
            700 : {
                items:2,
            }
        }
    });

};