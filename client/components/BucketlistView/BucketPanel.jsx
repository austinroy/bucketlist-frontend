import React, {state} from 'react';
import { Panel, Button, ButtonToolbar, Modal, Form, FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap';
import ItemsList from './ItemsList.jsx';
import Bucket from './Bucket.jsx';

class BucketPanel extends React.Component {
  constructor(props){
    super(props);
    // this.renderBuckets = this.renderBuckets.bind(this);
    this.state = {
      showModal: false,
      bucketlists: ["Bucketlist 1", "Bucketlist 2"]
    }
  };

  // close = () => {
  //   this.setState({ showModal: false });
  // };
  //
  // open = () => {
  //   this.setState({ showModal: true });
  // };
  //
  // renderBuckets(bucketname, i){
  //   return(
  //     <Panel header={bucketname} bsStyle="primary" key={i}>
  //       <ItemsList />
  //       <ButtonToolbar>
  //         <Button bsStyle="info" bsSize="small" onClick={this.open}>Edit Bucketlist</Button>
  //         <Button bsStyle="danger" bsSize="small">Delete Bucketlist</Button>
  //       </ButtonToolbar>
  //       <Modal show={this.state.showModal} onHide={this.close}>
  //         <Modal.Header closeButton>
  //           <Modal.Title>Edit Bucket List</Modal.Title>
  //         </Modal.Header>
  //         <Modal.Body>
  //           <Form horizontal>
  //             <FormGroup controlId="formHorizontalText">
  //               <Col componentClass={ControlLabel} sm={2}>
  //                 Bucketlist Name
  //               </Col>
  //               <Col sm={10}>
  //                 <FormControl type="text" placeholder="bucketlist name" />
  //               </Col>
  //             </FormGroup>
  //
  //           </Form>
  //         </Modal.Body>
  //         <Modal.Footer>
  //           <Button type="submit" bsStyle="info" onClick={this.close}>Save Changes</Button>
  //           <Button bsStyle="danger" onClick={this.close}>cancel</Button>
  //         </Modal.Footer>
  //         </Modal>
  //     </Panel>
  //   )
  // }

  render() {
    return (
      <div>
        {this.state.bucketlists.map((name, index) => {
          return (
            <Bucket key={index} name={name} index={index} />
          )
        })}
      </div>
    )
  }
};

export default BucketPanel;
