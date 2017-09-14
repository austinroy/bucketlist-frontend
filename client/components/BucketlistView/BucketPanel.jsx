import React, {state} from 'react';
import { Panel, Button, ButtonToolbar, Modal, Form, FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap';
import ItemsList from './ItemsList.jsx';
import Bucket from './Bucket.jsx';
import { connect } from 'react-redux';

class BucketPanel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
    }
  };

  render() {
    console.log("Bucketlists: ", this.props.bucketlists);
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

function mapDispatchToProps(){
  return{
    createBucketList: bucketlist => dispatch(actions.createBucketList(bucketlist))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BucketPanel);
