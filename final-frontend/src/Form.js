import React from 'react';
import { Button } from 'antd';

class Form extends React.Component{
    constructor(props){
      super(props);
      this.state = {name: "", formSubmitted: false,dbData: {}};
    }
    render(){
        return(
            <Button type="primary">Submit</Button>
            );
    }
}
export default Form;
