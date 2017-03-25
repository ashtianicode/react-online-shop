import React from 'react';
import {render} from 'react-dom';
import {ListGroup,ListGroupItem} from 'react-bootstrap';



export default class Search extends React.Component{
constructor(){
  super();
  this.makeresulttable= this.makeresulttable.bind(this);
}

makeresulttable(results){
  let elements=[];
  results.forEach(
    function(item){
      let  key = "result"+item.id;
      elements.push(<ListGroupItem key ={key}>{item.name}</ListGroupItem>);
    }

    );

    return(<ListGroup  bsClass='list-group'>{elements}</ListGroup>);
}

render(){

const elements = this.makeresulttable(this.props.searchresults);

  return(
    <div id="searchbox">
    <input type="text" value={this.props.searchword} onChange={this.props.searchit} id="searchinput" placeholder="search..." />
<div>{elements}</div>



  </div>
)
}


}
