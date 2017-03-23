import React from 'react';
import {render} from 'react-dom';
import {Modal,Button} from 'react-bootstrap';

export default class Modalitem extends React.Component{

render(){
  return(
    <div>
    <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
           <Modal.Header closeButton>
             <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
           </Modal.Header>
           <Modal.Body>
             <h4>{this.props.item["name"]}</h4>

           </Modal.Body>
           <Modal.Footer>
           <Button onClick={this.props.remove}>Remove</Button>
             <Button onClick={this.props.onHide}>Close</Button>
           </Modal.Footer>
         </Modal>

    </div>

  )
}


}
