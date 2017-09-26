import React, { Component } from 'react';
import { Panel, Button, ButtonToolbar, Modal, Form, FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap';
import ItemsList from './ItemsList.jsx';
import { connect } from 'react-redux';
import * as actions from '../../redux/bucket/actions.js'

export class Bucket extends Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      bucketdata: {
        name: ''
      }
    }
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.submitChanges = this.submitChanges.bind(this);
  };

  close () {
    this.setState({ showModal: false });
  };

  open () {
    this.setState({ showModal: true });
  }
  onNameChange (event) {
    const bucketdata = this.state.bucketdata;
    bucketdata.name = event.target.value;
    this.setState({bucketdata: bucketdata});
  }

  submitChanges (dispatch) {
    const {bucketlist: {id}} = this.props;
    const bucketdata = {
      id,
      name: this.state.bucketdata.name
    };
    console.log("this is id: ", bucketdata.id);
    this.props.updateBucketlist(bucketdata);
    this.setState({ showModal: false });
  }

  render() {
    console.log("", this.props)
    const {bucketlist: {name, items, id}} = this.props;
    console.log('Props: ', this.props);
    console.log('Panel vars: name: ', name, 'items: ',items);
    return (
      <Panel header={name} bsStyle="primary">
        <ItemsList items={items} />
        <ButtonToolbar>
          <Button bsStyle="info" bsSize="small" onClick={this.open}>Edit Bucketlist</Button>
          <Button bsStyle="danger" bsSize="small">Delete Bucketlist</Button>
        </ButtonToolbar>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Bucket List</Modal.Title>
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
            <Button type="submit" bsStyle="info" onClick={this.submitChanges}>Save Changes</Button>
            <Button bsStyle="danger" onClick={this.close}>cancel</Button>
          </Modal.Footer>
          </Modal>
      </Panel>
    )
  }
};

function mapDispatchToProps(dispatch){
  return{
    fetchBucketlists: () => dispatch(actions.fetchBucketlists),
    updateBucketlist: bucketdata => dispatch(actions.updateBucketlist(bucketdata))
  };
};

export default connect(mapDispatchToProps)(Bucket);
