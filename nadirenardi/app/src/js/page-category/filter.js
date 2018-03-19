export const Filter = ()=>{

    const fWrapper = document.getElementById('filter');
    const filter = {
        button: document.getElementsByClassName('filter__btn')[0],
        wrapper: fWrapper,
        header: document.getElementById('filterWrapper'),
        select: fWrapper.getElementsByTagName('label'),
        input: fWrapper.getElementsByTagName('input')
    };

    if(filter.wrapper){

        let title = 'Test';
        filter.template = `<div class="filter__active-item" data-select="${title}">
                                <span>${title}</span>
                                <button class="delete-select"></button>
                           </div>`;


        filter.itemsSelect = [];

        for (let i=0;i<filter.input.length;i++){
            if (filter.input[i].checked){

                const inCh =  filter.input[i].parentNode.getElementsByTagName('span')[0].textContent;

                console.log(inCh);
            }

        }


     /*   for each (let input in filter.input){

        }
*/

        let AddFilterHandler = (title)=>{
            filter.itemsSelect.map(item=>{
                filter.header.insertAdjacentHTML(item);
            });
        };



        for (let i=0; i<filter.select.length; i++){

            filter.select[i].onclick = function () {
                filter.text = this.getElementsByTagName('span')[0].textContent;

                title = i;
                filter.itemsSelect.push(filter.template);
                AddFilterHandler();

            }
        }

    }
};