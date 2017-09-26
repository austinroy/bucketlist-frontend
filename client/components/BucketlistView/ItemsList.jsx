import React, {state} from 'react';
import { ListGroup, ListGroupItem, Button, ButtonToolbar, Modal, 
  Form, FormGroup, Col, ControlLabel, FormControl, ButtonGroup } from 'react-bootstrap';
import BucketItem from './BucketItem.jsx'
import { connect } from 'react-redux';
import * as actions from '../../redux/bucket/actions.js'


class ItemsList extends React.Component {
  constructor(props){
    super(props);
    this.closeNewModal = this.closeNewModal.bind(this);
    this.openNewModal = this.openNewModal.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.handleNewBucketSubmit = this.handleNewBucketSubmit.bind(this);
    this.state = {
      showModal: false,
      showItemModal: false,
      itemdata: {
        name: ''
      }
    }
  };

  closeNewModal() {
    this.setState({ showItemModal: false });
  };

  openNewModal() {
    this.setState({ showItemModal: true });
  };

  onNameChange (event) {
    const itemdata = this.state.itemdata;
    itemdata.name = event.target.value;
    this.setState({itemdata: itemdata});
  }

  handleNewBucketSubmit (dispatch){
    const bucketlist_id = this.props.bucketlist_id;
    const itemdata = {
      name: this.state.itemdata.name,
      bucketlist_id
    };
    this.props.newBucketlistItem(itemdata);
    this.setState({ showNewModal: false });
  }

  render() {
    const items = this.props.items;
    return (
      <ListGroup>
        {items.map((item, index) => {
          return (
            <BucketItem key={index} item={item} />
          )
        })}
        <ListGroupItem onClick={this.openNewModal}>New Bucket List Item</ListGroupItem>
          <Modal show={this.state.showItemModal} onHide={this.closeNewModal}>
            <Modal.Header closeButton>
              <Modal.Title>Add New Bucket List Item</Modal.Title>
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
              <Button type="submit" bsStyle="info" onClick={this.handleNewBucketSubmit}>Save Item</Button>
              <Button bsStyle="danger" onClick={this.closeNewModal}>cancel</Button>
            </Modal.Footer>
          </Modal>
      </ListGroup>
    )
  }
};

function mapDispatchToProps(dispatch){
  return{
    newBucketlistItem: itemdata => dispatch(actions.newBucketlistItem(itemdata))
  };
};

export default connect(null, mapDispatchToProps)(ItemsList);
