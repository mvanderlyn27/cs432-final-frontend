import React from 'react';
import { Button } from 'antd';
import { Table, Tag, Space } from 'antd';

class Display extends React.Component{
    constructor(props){
      super(props);
      this.cols =  [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: 'Gender',
              dataIndex: 'gender',
              key: 'gender',
            },
          ];
      }
    render(){
        return(
           
            <h1>{this.props.data.pred}</h1>
            );
    }
}
export default Display;
