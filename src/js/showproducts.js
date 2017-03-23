import React from 'react';
import {render} from 'react-dom';
import Tablemaker from './data_table_maker.js';
import Modal from './modal.js';
import {productsdata} from './data.js';

export default class Productshow extends React.Component{



constructor(){
  super();
  this.state={
    data:productsdata,
    modalshow:false,
    item:{}
  }
  this.closemodal=this.closemodal.bind(this);
  this.openmodal=this.openmodal.bind(this);
  this.remove=this.remove.bind(this);


}

closemodal = ()=>this.setState({modalshow:false});
openmodal = (item)=>this.setState({modalshow:true,item:item});
remove (){
  let tempdata= this.state.data;
  let freshdata= tempdata.filter(    (item)=>{return( item.id != this.state.item["id"] )  }  );
  console.log(freshdata.length);
this.setState({data:freshdata});
};

render(){
  return(
    <div>


<Tablemaker openmodal={this.openmodal} data={this.state.data}/>
<Modal show={this.state.modalshow} onHide={this.closemodal} item={this.state.item} remove={this.remove}/>


    </div>

  )
}


}
