import React from 'react';
import {render} from 'react-dom';


export default class Tablemaker extends React.Component{


  constructor()
  {
    super();
    this.state={
        elements:[]
    }
    this.table=this.table.bind(this);

  }



  componentDidMount() {
    let productsdata = this.props.data;
    this.table(productsdata,4);

   }




  table(data,col){
  let bootsize=  "col-md-"+ Math.floor(12/col) + " item";
  let items=[];
  let elements=[];
  data.map(
  (item,index)=>{
  items.push(

  <div key={"item"+item.id} class={bootsize} >


   <h1>{item.name}</h1>
   <p>{item.price}</p>
  <img src={item.image}/>
<button class="itembutton" onClick={()=> this.props.openmodal(item)}>edit</button>


  </div>

);

if( (index+1) % col == 0){

elements.push(<div class="row" key={"row"+(index/col)}>{items}</div>);
items=[];
 }

  });

  this.setState({elements:elements});
  }








render(){
  return(
    <div>
    <h1>product table</h1>


         <div id= "product_list_container" class="container">
         {this.state.elements}
         </div>

    </div>

  )
}


}
