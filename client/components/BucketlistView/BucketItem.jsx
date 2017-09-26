import React, {state} from 'react';
import { ListGroup, ListGroupItem, Button, ButtonToolbar, Modal, 
  Form, FormGroup, Col, ControlLabel, FormControl, ButtonGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../redux/bucket/actions.js'

export class BucketItem extends React.Component {
  constructor(props){
    super(props);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.submitChanges = this.submitChanges.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.setDone = this.setDone.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = {
      showModal: false,
      showItemModal: false,
      itemdata: {
        name: ''
      }
    }
  };


  close() {
    this.setState({ showModal: false });
  };

  open() {
    this.setState({ showModal: true });
  };

  onNameChange (event) {
    const itemdata = this.state.itemdata;
    itemdata.name = event.target.value;
    this.setState({itemdata: itemdata});
  }

  submitChanges (dispatch) {
    const item = this.props.item;
    console.log(item);
    const {id, bucketlist_id} = item;
    const itemdata = {
      id,
      bucketlist_id,
      name: this.state.itemdata.name
    };
    this.props.updateBucketlistItem(itemdata);
    this.setState({ showModal: false });
  }

  setDone (dispatch) {
    const item = this.props.item;
    const {id, bucketlist_id} = item;
    const itemdata = {
      id,
      bucketlist_id,
      done: "true"
    };
    this.props.updateBucketlistItem(itemdata);
  }

  deleteItem (dispatch) {
    const item = this.props.item;
    const {id, bucketlist_id} = item;
    const itemdata = {
      id,
      bucketlist_id,
    };
    this.props.deleteBucketlistItem(itemdata);
  }
  

  render(){
    const item = this.props.item;
    return(
      <ListGroupItem>{item.name}
        <ButtonGroup className="pull-right">
          <Button bsSize="xsmall" bsStyle="info" onClick={this.open}>Edit</Button>
          <Button bsSize="xsmall" bsStyle="success" onClick={this.setDone}>Done</Button>
          <Button bsSize="xsmall" bsStyle="danger" onClick={this.deleteItem}>Delete</Button>
        </ButtonGroup>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Bucket List Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form horizontal>
              <FormGroup controlId="formHorizontalText">
                <Col componentClass={ControlLabel} sm={2}>
                  Item Name
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
      </ListGroupItem>
    )
  }
};

function mapDispatchToProps(dispatch){
  return{
    updateBucketlistItem: itemdata => dispatch(actions.updateBucketlistItem(itemdata)),
    deleteBucketlistItem: itemdata => dispatch(actions.deleteBucketlistItem(itemdata))
  };
};

export default connect(null,mapDispatchToProps)(BucketItem);