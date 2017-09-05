import React from 'react';
import { Jumbotron, DropdownButton, InputGroup, MenuItem, PageHeader } from 'react-bootstrap';
import BucketPanel from "./BucketPanel.jsx";

class BucketlistsPage extends React.Component {

  render() {
    return (
      <div className="container justify-content-center">
        <PageHeader bsStyle="primary">Austin Roy <small>Your Bucketlists</small></PageHeader>
        <BucketPanel />
      </div>
    )
  }
};

export default BucketlistsPage;
