import React, {state} from 'react';
import { Panel, Button, ButtonToolbar, Modal, Form, FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap';
import ItemsList from './ItemsList.jsx';
import Bucket from './Bucket.jsx';

class BucketPanel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      bucketlists: ["Bucketlist 1", "Bucketlist 2"]
    }
  };

  render() {
    return (
      <div>
        {this.state.bucketlists.map((name, index) => {
          return (
            <Bucket key={index} name={name} index={index} />
          )
        })}
      </div>
    )
  }
};

export default BucketPanel;
