import React from 'react';
import  Form  from './Form';
import  Display  from './Display';

import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {name: "", formSubmitted: false,dbData: {}};
  }
  render(){
    let conditional;
    if (this.state.formSubmitted){
      conditional = <Display/>;
    }
      else{
        conditional = <Form/>;
      }
  return (
    <div className="App">
     {conditional}
    </div>
  );
  }
}

export default App;
