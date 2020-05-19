import React from 'react';
import { Button } from 'antd';

class Display extends React.Component{
    constructor(props){
      super(props);
      this.state = {name: "", formSubmitted: false,dbData: {}};
    }
    render(){
        return(
            <Button type="primary">Go Back to Form</Button>
            );
    }
}
export default Display;
