export const Footer = (Resize,device)=>{
    if (device === 'tablet' || device === 'mobile') {
        let  toggle = document.querySelectorAll('[data-toggle]');


        for (let i=0;i<toggle.length;i++){
            const title =  toggle[i].getElementsByClassName('site-map__title')[0];
            title.onclick = function () {
               // const section = this.parentNode.getElementsByClassName('site-map__secIn')[0];
                const section = $(this).parent().find('.site-map__secIn');
                this.classList.toggle('active');
                section.slideToggle()

            }
        }


    }


};

