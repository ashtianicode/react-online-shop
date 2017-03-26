import React from 'react';
import {render} from 'react-dom';
import {Modal,Button} from 'react-bootstrap';



export default class Addproduct extends React.Component{
  constructor(){
    super();
  }



  render(){


    return(
      <div >
        <div id="addproduct" onClick={this.props.openmodal}><div id="addproducttext">add product <span class="glyphicon glyphicon-plus"></span></div></div>
          <Modal {...this.props.addproductmodalprops} bsSize="large" aria-labelledby="contained-modal-title-lg">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-lg">product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input type="text" value={this.props.addingitem.name} onChange={this.props.addhandler} id="name"/>
              <input type="text" value={this.props.addingitem.price} onChange={this.props.addhandler} id="price"/>

            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.addproduct}>add product</Button>
              <Button onClick={this.props.addproductmodalprops.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>

      </div>
    )
  }


}
