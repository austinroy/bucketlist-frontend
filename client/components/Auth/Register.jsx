import React from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button, PageHeader } from 'react-bootstrap';
import {connect} from 'react-redux';

class RegForm extends React.Component {
  render() {
    return (
      <div className="container justify-content-center">
        <PageHeader bsStyle="primary">Register</PageHeader>
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
                <Button type="submit">
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

function mapDispatchToProps(){
  return{
    registerUser: user => dispatch(actions.registerUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegForm);
