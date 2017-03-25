import React from 'react';
import render from 'react-dom';
import {Modal,Button,ListGroup,ListGroupItem} from 'react-bootstrap';


export default class Shoppinglist extends React.Component {
  constructor(){
    super();
    this.makeresulttable= this.makeresulttable.bind(this);
  }

  makeresulttable(results){
    let elements=[];
    results.forEach(
      function(item){
        let  key = "result"+item.id;
        elements.push(<ListGroupItem key ={key}>{item.name}<h4> price {item.price}</h4></ListGroupItem>);
      }

      );

      return(<ListGroup  bsClass='list-group'>{elements}</ListGroup>);
  }

render(){

const elements = this.makeresulttable(this.props.purchaseditems);


  return(
<div>
<div id="shoppinglist" onClick={this.props.openmodal}><div id="shoppinglisttext">shopping list <span class="badge">{this.props.purchaseditems.length}</span></div></div>
  <Modal {...this.props.shoppinglistmodalprops} bsSize="large" aria-labelledby="contained-modal-title-lg">
           <Modal.Header closeButton>
             <Modal.Title id="contained-modal-title-lg">shopping list</Modal.Title>
           </Modal.Header>
           <Modal.Body>
             {elements}
           </Modal.Body>
           <Modal.Footer>
             <Button onClick={this.props.shoppinglistmodalprops.onHide}>Close</Button>
           </Modal.Footer>
         </Modal>
</div>
  )
}




}
