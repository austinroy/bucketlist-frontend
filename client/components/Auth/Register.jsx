import React from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button, PageHeader } from 'react-bootstrap';
import {connect} from 'react-redux';
import * as actions from '../../redux/auth/actions.js' 


class RegForm extends React.Component {

  constructor(props, context){
    super(props, context);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.regSubmit = this.regSubmit.bind(this);
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

  regSubmit(dispatch){
    const data = {
      username: this.state.userdata.username,
      password: this.state.userdata.password
    }
    this.props.registerUser(data);
  }


  render() {
    return (
      <div className="container justify-content-center">
        <PageHeader bsStyle="primary">Register</PageHeader>
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
                <Button type="submit" onClick={this.regSubmit}>
                  Sign up
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
    registerUser: userdata => dispatch(actions.registerUser(userdata))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegForm);
