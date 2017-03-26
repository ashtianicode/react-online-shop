import React from 'react';
import {render} from 'react-dom';
import {Modal,Button} from 'react-bootstrap';

export default class Modalitem extends React.Component{



  render(){
    return(
      <div>
        <Modal {...this.props.modalprops} bsSize="large" aria-labelledby="contained-modal-title-lg">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="text" value={this.props.item["name"]} onChange={this.props.changehandler} id="name"/>
            <input type="text" value={this.props.item["price"]} onChange={this.props.changehandler} id="price"/>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.remove}>Remove</Button>
            <Button onClick={this.props.modalprops.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>

      </div>

    )
  }


}
