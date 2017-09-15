import React from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button, Checkbox, PageHeader } from 'react-bootstrap';
import {connect} from 'react-redux';

class LoginForm extends React.Component {
  render() {
    return (
      <div className="container justify-content-center">
        <PageHeader bsStyle="primary">Log In</PageHeader>
        <Col className="col-md-8 justify-content-md-center">
          <Form horizontal>

            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={10}>
                <FormControl type="email" placeholder="Email" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl type="password" placeholder="Password" />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Checkbox>Remember me</Checkbox>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">
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

function mapDispatchToProps(){
  return{
    loginUser: user => dispatch(actions.loginUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
