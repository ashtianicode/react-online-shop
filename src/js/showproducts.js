import React from 'react';
import {render} from 'react-dom';
import Tablemaker from './data_table_maker.js';
import Modal from './modal.js';
import {productsdata} from './data.js';
import Shoppinglist from './shoppinglist.js';
export default class Productshow extends React.Component{



  constructor(){
    super();
    this.state={
      data:productsdata,
      modalshow:false,
      item:{},
      purchaseditems:[]
    }
    this.closemodal=this.closemodal.bind(this);
    this.openmodal=this.openmodal.bind(this);
    this.remove=this.remove.bind(this);
    this.changehandler=this.changehandler.bind(this);
    this.buy=this.buy.bind(this);



  }

  closemodal = ()=>this.setState({modalshow:false});
  openmodal(item){
    this.setState({modalshow:true,item:item});}
  remove (){
    const tempdata= this.state.data;
    const freshdata= tempdata.filter(    (item)=>{return( item.id != this.state.item["id"] )  }  );
    this.setState({data:freshdata});
    }
buy(item){
  const newlist =this.state.purchaseditems;
  newlist.push(item);
   this.setState({purchaseditems:newlist});
  console.log("bought",newlist);
}

  changehandler(event){
let id = event.target.id;
let value = event.target.value;
let item =this.state.item;
item[id]=value;
this.setState({item:item});
console.log("id :",id,"value :",value,"item",this.state.item);
  };


  render(){

 const modalprops= {show:this.state.modalshow ,onHide:this.closemodal};

    return(
      <div>

        <Shoppinglist items={this.state.purchaseditems}/>
      <Tablemaker openmodal={this.openmodal} data={this.state.data} buy={this.buy}/>
      <Modal modalprops={modalprops} item={this.state.item} remove={this.remove} changehandler={this.changehandler}/>


      </div>

    )
  }


}
