
<div id="filter"></div>

<!--onChange={(event)=>this.changedHandler(event,item.name,column+''+key)}-->
<script type='text/jsx'>



    class Selects extends React.Component{
        render(){



            return(
                <div className="filter__items">
                    <div class="filter__column">
                        <h4 class="filter__title">Title</h4>
                        <ul>
                            <li>
                                <label>
                                    <input type="checkbox"/>
                                        <span>Lorem ipsum 1</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        }
    }


    class FilterHeader extends React.Component{
        state={
            sections:[
                {
                    title: 'Section 1',
                    selects: [
                        {
                            name: 'Select 1',
                            value: '1_1',
                            checked: false
                        },
                        {
                            name: 'Select 2',
                            value: '1_2',
                            checked: false
                        },
                        {
                            name: 'Select 3',
                            value: '1_3',
                            checked: false
                        },
                        {
                            name: 'Select 4',
                            value: '1_4',
                            checked: false
                        },
                        {
                            name: 'Select 5',
                            value: '1_5',
                            checked: false
                        },
                    ]
                },
                {
                    title: 'Section 2',
                    selects: [
                        {
                            name: 'Select 6',
                            value: '2_1',
                            checked: false
                        },
                        {
                            name: 'Select 7',
                            value: '2_2',
                            checked: false
                        },
                    ]
                },
                {
                    title: 'Section 3',
                    selects: [
                        {
                            name: 'Select 8',
                            value: '3_1',
                             checked: false
                        },
                        {
                            name: 'Select 9',
                            value: '3_2',
                             checked: false
                        },
                    ]
                },
                {
                    title: 'Section 4',
                    selects: [
                        {
                            name: 'Select 10',
                            value: '4_1',
                             checked: false
                        },
                        {
                            name: 'Select 11',
                            value: '4_2',
                             checked: false
                        },
                    ]
                },
                {
                    title: 'Section 5',
                    selects: [
                        {
                            name: 'Select 12',
                            value: '5_1',
                             checked: true
                        },
                        {
                            name: 'Select 13',
                            value: '5_2',
                             checked: false
                        },
                    ]
                },
                {
                    title: 'Section 6',
                    selects: [
                        {
                            name: 'Select 14',
                            value: '6_1',
                             checked: false
                        },
                        {
                            name: 'Select 15',
                            value: '6_2',
                             checked: false
                        },
                    ]
                }
            ],
            selected:[],
        };


        clickedHandler =(col,id)=>{
            let newSections = [...this.state.sections];
            let selected = [...this.state.selected];

            const selectItem = newSections[col].selects[id];

            selectItem.checked = !selectItem.checked;

            this.setState({sections: newSections});

            if(selectItem.checked){
                selected.push({name:selectItem.name,value:col+''+id, column:col,id:id});
                this.setState({selected: selected});
            }else{
                selected = selected.filter(obj=>{
                    return obj.value !== col+''+id;
                });

                this.setState({selected: selected});
            }

            console.log(selected);
        };


        deleteHandler = (select,id)=>{
            let selected = [...this.state.selected];

            let newSections = [...this.state.sections];

            const idS = selected[id].value;
            const column = select.column;
            const selId = select.id;
            newSections[column].selects[selId].checked = false;
            selected = selected.filter(obj=>{
                return obj.value !== idS;
            });
            this.setState({selected:selected});
        };


        componentDidMount(){
          this.state.sections.map((item,key)=>{
                  item.selects.map((it,k)=>{
                      if (it.checked){
                          console.log(it);
                      }

              })

            })
        }

    render(){


        let activeSelects =  this.state.selected.map((item,key)=>{
            return <div className="filter__active-item" key={key}>
                <span>{item.name}</span>
                <button className="delete-select" data-rt={item} onClick={()=>this.deleteHandler(item,key)}>
                    <i class="ion-android-close"></i>
                </button>
            </div>
        });



        let items  = this.state.sections.map((section,column)=>{
             return <div className="filter__column" key={column}>
                 <h4 className="filter__title">{section.title}</h4>
                 <ul>
                     {

                         section.selects.map((item,key)=>{
                             return <li>
                                 <label key={column+''+key} >
                                     <input type="checkbox" value={item.value}  checked={item.checked}/>

                                     <span onClick={()=>this.clickedHandler(column,key)}>{item.name}</span>
                                 </label>
                             </li>
                         })
                     }
                 </ul>
             </div>;
          });

          const FilterBtn = <div className="filter__btn">
              <span>Фильтр</span>
              <i className="ion-ios-arrow-down"></i>
          </div>;
          return (
          <div className="filter">
              <div className="flex flex--a-center">
                  {FilterBtn}
                  <div class="flex flex--a-center" id="filterWrapper">
                      {activeSelects}
                  </div>
              </div>
              <div className="filter__items">
                  {items}
              </div>
           </div>
          );
      }
    };







    const Filter = (
        <div className="filter">
            <FilterHeader/>
        </div>

    );


 /*   class Filter extends React.Component{
        render(){
            return   <FilterHeader/> ;
        }
    };*/




    ReactDOM.render(
        Filter,
        document.getElementById('filter')
    );
</script>