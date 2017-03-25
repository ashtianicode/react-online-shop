import React from 'react';
import {render} from 'react-dom';
import Tablemaker from './data_table_maker.js';
import Modal from './modal.js';
import {productsdata} from './data.js';
import Shoppinglist from './shoppinglist.js';
import Search from './search.js';
import Fuse from 'fuse.js';
export default class Productshow extends React.Component{



  constructor(){
    super();
    this.state={
      data:productsdata,
      modalshow:false,
      item:{},
      purchaseditems:[],
      searchresults:[{"name":"","price":"$0","image":"url"}],
      shoppinglistshow:false,
    }
    this.closemodal=this.closemodal.bind(this);
    this.openmodal=this.openmodal.bind(this);
    this.remove=this.remove.bind(this);
    this.changehandler=this.changehandler.bind(this);
    this.buy=this.buy.bind(this);
    this.searchit=this.searchit.bind(this);
    this.shoppinglistclosemodal=this.shoppinglistclosemodal.bind(this);
    this.shoppinglistopenmodal=this.shoppinglistopenmodal.bind(this);



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
  };

searchit(event){
  let word = event.target.value;
  var options = {
  shouldSort: true,
  threshold: 0.5,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: ['name']
}
var fuse = new Fuse(this.state.data, options)
let results = fuse.search(word);
console.log("fuse result :",results);
this.setState({searchresults:results});

}

shoppinglistclosemodal = ()=>this.setState({shoppinglistshow:false});
shoppinglistopenmodal = ()=>this.setState({shoppinglistshow:true});



  render(){

 const modalprops= {show:this.state.modalshow ,onHide:this.closemodal};
 const shoppinglistmodalprops ={show:this.state.shoppinglistshow,onHide:this.shoppinglistclosemodal}
    return(
      <div>
        <Search searchresults={this.state.searchresults} searchit={this.searchit} />
        <Shoppinglist  shoppinglistmodalprops={shoppinglistmodalprops} purchaseditems={this.state.purchaseditems} openmodal={this.shoppinglistopenmodal}/>
      <Tablemaker openmodal={this.openmodal} data={this.state.data} buy={this.buy}/>
      <Modal modalprops={modalprops} item={this.state.item} remove={this.remove} changehandler={this.changehandler}/>


      </div>

    )
  }


}
