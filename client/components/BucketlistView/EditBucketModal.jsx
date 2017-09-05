import React from 'react';
import { Panel, Button, ButtonToolbar, Modal } from 'react-bootstrap';

class EditBucketModal extends React.Component {

  render() {
    return (
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
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

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">
                  Sign in
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" bsStyle="info" onClick={this.close}>Save Changes</Button>
          <Button bsStyle="danger" onClick={this.close}>cancel</Button>
        </Modal.Footer>
        </Modal>
    )
  }
};

export default EditBucketModal;
