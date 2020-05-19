import React from 'react';
import { Table, Button, Typography, Skeleton} from 'antd';
const { Text,Title} = Typography;
//component to display output from db (truth table)
class Display extends React.Component{
    constructor(props){
      super(props);
      this.state = {binary:false}
    }
    //toggles between displaying T/F as 1/0
  toggleBinary(){
      this.setState({binary:!this.state.binary});
  }
  //renders form, conditionally renders a skeleton
    render(){
        
        var component;
        if(this.props.data){
        let cols = this.props.data.data[0];
        let data = this.props.data.data.slice(1,this.props.data.data.length);
        console.log(data);
        let datasource= [];
        data.forEach((ar,i)=>{
            let row = {key:i};
            ar.forEach((val, i)=>{
                let piece = {}
                console.log(cols[i]);
                if(!this.state.binary){
                piece[cols[i]] = val==0?"F":"T";
                }
                else{
                    piece[cols[i]] = val;
                }
                console.log(piece) 
                row = Object.assign({}, row, piece);
            });
            datasource.push(row)
        });
        console.log(datasource);
        let columns = [];
        cols.forEach(name=>{
            columns.push({title:name,dataIndex:name,key:name});
        });
            
            component = <div><Typography><Title level={2}>{this.props.data.exp}</Title></Typography><Table dataSource={datasource} columns={columns} /><Button onClick={this.toggleBinary.bind(this)} type="primary">{this.state.binary?"Switch to T/F":"Switch to binary"}</Button></div>;
        }
        else{
            component = <div><Typography><Text>data isn't here yet, might need to enter some on the other tab</Text></Typography> <Skeleton/></div>;
        }
        return(
            <div>
                
                {component}
            </div>
            );
    }
}
export default Display;
