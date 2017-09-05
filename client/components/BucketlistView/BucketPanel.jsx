import React, {state} from 'react';
import { Panel, Button, ButtonToolbar, Modal, Form, FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap';

class BucketPanel extends React.Component {
  constructor(props){
    super(props);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.state = {
      showModal: false
    }
  };

  close() {
    this.setState({ showModal: false });
  };

  open() {
    this.setState({ showModal: true });
  };

  render() {
    return (
      <Panel header="My Bucketlist" bsStyle="primary">
        Bucketlist Items
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
      </Panel>
    )
  }
};

export default BucketPanel;
