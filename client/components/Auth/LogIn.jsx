import React from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button, Checkbox, PageHeader } from 'react-bootstrap';
import {connect} from 'react-redux';
import * as actions from '../../redux/auth/actions.js'

class LoginForm extends React.Component {
  constructor(props, context){
    super(props, context);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.loginSubmit =  this.loginSubmit.bind(this);
    this.state = {
      userdata : {
        username: '',
        password: ''
      }
    }
  }

  onUsernameChange(event){
    const userdata = this.state.userdata;
    userdata.username = event.target.value;
    this.setState({userdata: userdata});
  }

  onPasswordChange(event){
    const userdata = this.state.userdata;
    userdata.password = event.target.value;
    this.setState({userdata: userdata});
  }

  loginSubmit(dispatch){
    const data = {
      username: this.state.userdata.username,
      password: this.state.userdata.password
    }
    this.props.loginUser(data);
  }

  render() {
    return (
      <div className="container justify-content-center">
        <PageHeader bsStyle="primary">Log In</PageHeader>
        <Col className="col-md-8 justify-content-md-center">
          <Form horizontal>

            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Username
              </Col>
              <Col sm={10}>
                <FormControl type="text" placeholder="Username" onChange={this.onUsernameChange} />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl type="password" placeholder="Password" onChange={this.onPasswordChange}/>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Checkbox>Remember me</Checkbox>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit" onClick={this.loginSubmit}>
                  Sign in
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </div>
    )
  }
};

function mapStateToProps(state, ownProps) {
  return{
    users: state.users
  };
};

function mapDispatchToProps(dispatch){
  return{
    loginUser: user => dispatch(actions.loginUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
