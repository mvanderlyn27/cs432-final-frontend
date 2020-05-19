import React from 'react';
import  FormHolder  from './Form';
import  Display  from './Display';
import { Typography,Layout,Menu,Row, Col  } from 'antd';
import { CloudUploadOutlined, TableOutlined } from '@ant-design/icons';
import './App.css';
const { Title } = Typography;
const { Content } = Layout;

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {name: "", currentState: "form", formSubmitted: false, dataRecieved: false, dbData: null};
  }
  //misc helper functions
  handleClick = e => {
    console.log('click ', e);
    this.setState({
      currentState: e.key,
    });
  };
  startedUpload(){
    console.log('start');

    this.setState({formSubmitted:true});
  }
  successfulUpload(data){
    console.log('success');
    console.log('data',data);
    this.setState({formSubmitted:true,dataRecieved:true,currentState:"data",dbData:data});
  }
  failedUpload(){
    console.log('failed');
    this.setState({formSubmitted:false,dataRecieved:false,currentState:"form"});
  }
  //main render function
  render(){
    //conditionally renders form, or display components
    let conditional;
    if (this.state.currentState==="form"){
      conditional = <FormHolder onSuccess={this.successfulUpload.bind(this)} onFail={this.failedUpload.bind(this)} onStart={this.startedUpload.bind(this)}/>;
    }
      else{
        conditional = <Display data={this.state.dbData}/>;
      }
  return (
    <div className="App">
        <Typography>
          <Title>SWE 432 Final Project</Title>
          <Title level={3}>Truth Table Generator</Title>

      <Menu onClick={this.handleClick} selectedKeys={[this.state.currentState]} mode="horizontal">
        <Menu.Item key="form" icon={<CloudUploadOutlined />}>
          Submit Predicate
        </Menu.Item>
        <Menu.Item key="data" icon={<TableOutlined />}>
          View Truth Table
        </Menu.Item>
        </Menu>
          <Content>
            <Row>
              <Col span={4}/>
              <Col span={16}>
               {conditional}
              </Col>
            <Col span={4}/>

            </Row>
          </Content>
    </Typography>
    </div>
  );
  }
}

export default App;
