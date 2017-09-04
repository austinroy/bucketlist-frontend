import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class LandingPage extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h1>Xperience Bucketlist</h1>
        <p>Welcome to my bucketlist application, sign up or login to get started</p>
        <p><Button bsStyle="primary">Get started</Button></p>
      </Jumbotron>
    )
  }
};

export default LandingPage;
