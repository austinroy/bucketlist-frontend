import React, {state} from 'react';
import { Panel, Button, ButtonToolbar, Modal, Form, FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap';
import ItemsList from './ItemsList.jsx';
import Bucket from './Bucket.jsx';
import { connect } from 'react-redux';
import * as actions from '../../redux/bucket/actions'

class BucketPanel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
    }
  };

  render() {
    return (
      <div>
        {this.props.bucketlists.map((bucketlist, index) => {
          return (
            <Bucket key={index} bucketlist={bucketlist} />
          )
        })}
      </div>
    )
  }
};

function mapStateToProps(state, ownProps) {
  return{
    bucketlists: state.bucketlists
  };
};

export default connect(mapStateToProps)(BucketPanel);
