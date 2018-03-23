export class PopUp {

   constructor(btn='',id='',toShow=true){
       this.id = id;
       const body = $('body');
       const show = toShow;
       const popUpBody = $('.popUp__wrapper');
       this.popUp = {
           wrapper: $('.popUp'),
           btn: btn,
           btnClose: $('.popUp__close-btn'),
           showPopUp: ()=>{
                if(show){
                    id.addClass('active');

                    body.addClass('hidden');
                    setTimeout(function () {
                        id.find(popUpBody).addClass('active');
                    },400);
                }
           },
           closePopUp:()=>{
               id.find(popUpBody).removeClass('active');
               setTimeout(function () {
                   id.removeClass('active');
                   body.removeClass('hidden');
               },600);


           }
       };

       this.popUp.btnClose.click(()=>{
           this.popUp.closePopUp();
       });

       this.popUp.wrapper.click((e)=>{
           if($(e.target).is(this.popUp.wrapper)){
               this.popUp.closePopUp();
           }
       })


   }

   show(){
        this.popUp.showPopUp();
   }
   close(){
       this.popUp.closePopUp();
   }

}