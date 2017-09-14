import React, {state} from 'react';
import { ListGroup, ListGroupItem, Button, ButtonToolbar, Modal, Form, FormGroup, Col, ControlLabel, FormControl, ButtonGroup } from 'react-bootstrap';
import BucketItem from './BucketItem.jsx'

class ItemsList extends React.Component {
  constructor(props){
    super(props);
    this.closeNewModal = this.closeNewModal.bind(this);
    this.openNewModal = this.openNewModal.bind(this);
    this.state = {
      showModal: false,
      showItemModal: false,
    }
  };

  closeNewModal() {
    this.setState({ showItemModal: false });
  };

  openNewModal() {
    this.setState({ showItemModal: true });
  };




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
                    <FormControl type="text" placeholder="bucketlist name" />
                  </Col>
                </FormGroup>

              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" bsStyle="info" onClick={this.closeNewModal}>Save Changes</Button>
              <Button bsStyle="danger" onClick={this.closeNewModal}>cancel</Button>
            </Modal.Footer>
          </Modal>
      </ListGroup>
    )
  }
};

export default ItemsList;
