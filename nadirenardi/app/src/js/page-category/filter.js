export const Filter = (device)=>{

    const fWrapper = document.getElementById('filter');



    if(device==='tablet' || device==='mobile'){

        $(document).ready(()=>{
            $('#filter .filter__btn').click(()=>{
                $('.filter__items').slideToggle();
            });

            $('.filter__title').click(function () {
                console.log();
                $(this).toggleClass('active')
                    .parent().find('ul').slideToggle();
            })

        });





    }


};