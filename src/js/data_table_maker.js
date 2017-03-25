import React from 'react';
import {render} from 'react-dom';
import {Col,Row,Grid,Button} from 'react-bootstrap';


export default class Tablemaker extends React.Component{


  constructor()
  {
    super();
    this.state={
    }
    this.table=this.table.bind(this);

  }




  table(data,col){
  let bootsize=  Math.floor(12/col);
  let items=[];
  let elements=[];
  data.map(
  (item,index)=>{
  items.push(

<Col  md={bootsize} key={"item"+item.id} className="item">

   <h1>{item.name}</h1>
   <p>{item.price}</p>
  <img src={item.image}/>
  <div>
    <button class="buybutton" onClick={()=> this.props.buy(item)}>buy</button>
<button class="itembutton" onClick={()=> this.props.openmodal(item)}>edit</button>
</div>
</Col>

);

if( (index+1) % col == 0){

elements.push( <Row  key={"row"+(index/col)} > {items}</Row>);
items=[];
 }

  });

  return (elements);
  }








render(){
  const productsdata = this.props.data;
  const table = this.table(productsdata,4);

  return(
    <div >



          <Grid id="productcontainer">
                <h1>product table</h1>
         {table}
       </Grid>


    </div>

  )
}


}
