import React from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button, Checkbox } from 'react-bootstrap';

class LoginForm extends React.Component {
  render() {
    return (
      <div className="container justify-content-center">
        <Col className="col-md-8 justify-content-md-center">
          <Form horizontal>
            <FormGroup>
              <h1>Log In</h1>
            </FormGroup>

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

export default LoginForm;
