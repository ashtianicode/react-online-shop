import React from 'react';
import {render} from 'react-dom';
import Productshow from './showproducts.js';



class Main extends React.Component{

render(){
  return(
    <div>
    <Productshow/>
    </div>

  )
}


}

render(<Main/>,document.getElementById('root'));
