import React from 'react';
import { Jumbotron, DropdownButton, InputGroup, MenuItem } from 'react-bootstrap';

class LandingPage extends React.Component {

  render() {
    return (
      <div className="container justify-content-center">
        <Jumbotron>
          <h1>Xperience Bucketlist</h1>
          <p>Welcome to my bucketlist application, sign up or login to get started</p>
          <p>
            <DropdownButton
              componentClass={InputGroup.Button}
              id="input-dropdown-addon"
              title="Get Started"
              bsStyle="primary">
              <MenuItem key="1">Login</MenuItem>
              <MenuItem key="2">Sign Up</MenuItem>
            </DropdownButton>
          </p>
        </Jumbotron>
      </div>
    )
  }
};

export default LandingPage;
