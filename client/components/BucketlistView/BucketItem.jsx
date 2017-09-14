import React, {state} from 'react';
import { ListGroup, ListGroupItem, Button, ButtonToolbar, Modal, Form, FormGroup, Col, ControlLabel, FormControl, ButtonGroup } from 'react-bootstrap';

export default class BucketItem extends React.Component {
  constructor(props){
    super(props);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.state = {
      showModal: false,
      showItemModal: false,
    }
  };


  close() {
    this.setState({ showModal: false });
  };

  open() {
    this.setState({ showModal: true });
  };
  render(){
    const item = this.props.item;
    return(
      <ListGroupItem>{item.name}
        <ButtonGroup className="pull-right">
          <Button bsSize="xsmall" bsStyle="info" onClick={this.open}>Edit</Button>
          <Button bsSize="xsmall" bsStyle="success">Done</Button>
          <Button bsSize="xsmall" bsStyle="danger">Delete</Button>
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
                  <FormControl type="text" placeholder="bucketlist name" />
                </Col>
              </FormGroup>

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" bsStyle="info" onClick={this.close}>Save Changes</Button>
            <Button bsStyle="danger" onClick={this.close}>cancel</Button>
          </Modal.Footer>
          </Modal>
      </ListGroupItem>
    )
  }
};
