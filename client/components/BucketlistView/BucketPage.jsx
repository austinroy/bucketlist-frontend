import React, { Component } from 'react';
import { PageHeader, Button, ButtonToolbar, Modal, Form, FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap';
import BucketPanel from "./BucketPanel.jsx";
import { connect } from 'react-redux';
import * as actions from '../../redux/bucket/actions.js'

export class BucketlistsPage extends Component {
  constructor(props){
    super(props);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.handleNewBucketSubmit = this.handleNewBucketSubmit.bind(this);
    this.state = {
      showModal: false,
      bucketdata: {
        name: ''
      }
    }
  };

  close () {
    this.setState({ showModal: false });
  };

  open () {
    this.setState({ showModal: true });
  };

  componentWillMount (dispatch){
    this.props.fetchBucketlists()
  }

  onNameChange (event) {
    const bucketdata = this.state.bucketdata;
    bucketdata.name = event.target.value;
    this.setState({bucketdata: bucketdata});
  }

  handleNewBucketSubmit (dispatch){
    const bucketdata = {
      name: this.state.bucketdata.name
    };
    this.props.createBucketlist(bucketdata);
    this.setState({ showModal: false });
    window.location.reload();
  }

  render() {
    return (
      <div className="container justify-content-center">
        <PageHeader bsStyle="primary">Austin Roy <small>Your Bucketlists </small></PageHeader>
        <Button className="btn push-right" bsSize="small" onClick={this.open}>New Bucketlist</Button>
        <BucketPanel />
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>New Bucketlist</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form horizontal>
                <FormGroup controlId="formHorizontalText">
                  <Col componentClass={ControlLabel} sm={2}>
                    Bucketlist Name
                  </Col>
                  <Col sm={10}>
                    <FormControl type="text" placeholder="bucketlist name" onChange={this.onNameChange}/>
                  </Col>
                </FormGroup>

              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" bsStyle="info" onClick={this.handleNewBucketSubmit}>Save Bucket List</Button>
              <Button bsStyle="danger" onClick={this.close}>cancel</Button>
            </Modal.Footer>
          </Modal>
      </div>
    )
  }
};

function mapStateToProps(state, ownProps) {
  return{
    bucketlists: state.bucketlists
  };
};

function mapDispatchToProps(dispatch){
  return{
    fetchBucketlists: () => dispatch(actions.fetchBucketlists),
    createBucketlist: bucketdata => dispatch(actions.createBucketlist(bucketdata))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BucketlistsPage);
