export class PopUp {

   constructor(btn='',id='',toShow=true){
       this.id = id;
       const body = $('body');
       const show = toShow;

       this.popUp = {
           btn: btn,
           btnClose: $('.popUp__close-btn'),
           showPopUp: ()=>{
                if(show){
                    id.addClass('active');
                    body.addClass('hidden');
                }
           },
           closePopUp:()=>{
               id.removeClass('active');
               body.removeClass('hidden');
           }
       };

       this.popUp.btnClose.click(()=>{
           this.popUp.closePopUp();
       })


   }

   show(){
        this.popUp.showPopUp();
   }
   close(){
       this.popUp.closePopUp();
   }

}