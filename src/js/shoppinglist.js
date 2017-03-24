import React from 'react';
import render from 'react-dom';


export default class Shoppinglist extends React.Component {

render(){
  return(

<h4>{this.props.items.length} items are in shopping list</h4>

  )
}




}
