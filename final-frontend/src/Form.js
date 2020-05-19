import React from 'react';
import { Form, Input, Button, Select, Space, notification, Typography, Row, Col } from 'antd';
const { Paragraph} = Typography;

const axios = require('axios');
const { Option } = Select;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  }; 
const db_url = 'https://swe432-final-b-end.herokuapp.com/getTruthTable';


class FormHolder extends React.Component{
    constructor(props){
      super(props);
      this.state = {name: "", formSubmitted: false,dbData: {}};
      
    }
    //submits files to backend
    onFinish(values) {
    this.props.onStart();
    console.log(values);
    var ref = this;
        axios.post(db_url, values).then(function(response){
            console.log(response);
            console.log(ref);
            ref.props.onSuccess(response.data);
        }).catch(function (response){
            console.log("error uploading data, please try again");
            ref.props.onFail();
            notification.open({
                message: 'Error Uploading Form',
                description: 'Please try again',
                onClick: () => {
                  console.log('Notification Clicked!');
                }
            });
      });
    }
    //resets form
      onReset = () => {
        this.formRef.current.resetFields();
      };
      //validates predicate is of proper format (DIDN"T HAVE ENOUGH TIME)
    validatePredicate(e){
        let val = e.target.value;
        console.log(val);
    }
    //renders form component, has error notification on failed upload
    render(){
        return(
            <div>
            <Row>
                <Col span={4}/>
                <Col span={16}>
                    <Typography>
                        <Paragraph>
                            Enter a predicate sentance below, clauses can be any word/group of letter,
                             logical operators accepted are: &, &&, AND, and , |, ||, OR, or, ~ , !, NOT, not
                             , XOR, ^
                        </Paragraph>
                    </Typography>
                </Col>

                <Col span={4}/>

            </Row>
<Form  ref={this.formRef} name="control-ref"  onFinish={this.onFinish.bind(this)}>
        <Form.Item name="pred" label="Predicate Statement" rules={[{ required: true }]}>
          <Input onKeyUp={this.validatePredicate}/>
        </Form.Item>
        
        <Form.Item >
            <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={this.onReset}>
            Reset
          </Button>
          </Space>
        </Form.Item>
      </Form>    
      </div>
            );
    }
}
export default FormHolder;
