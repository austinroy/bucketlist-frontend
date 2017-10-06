import React from 'react'
import { mount, shallow } from 'enzyme'
import sinon from 'sinon';
import { PageHeader, Button, ButtonToolbar, Modal, Form, FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap';
import { BucketlistsPage } from '../BucketlistView/BucketPage'


let fetchBucketlists = jest.fn()
let open = jest.fn()

const props = {
    fetchBucketlists,
    open
}

describe('BucketPage', () =>{
    it('renders without crashing', () => {
        const wrapper = shallow(<BucketlistsPage {...props}/>);
    })
    it('renders stock elements', ()=> {
        const wrapper = shallow(<BucketlistsPage {...props}/>);
        expect(wrapper.containsMatchingElement(
            <Button class="btn push-right" bsSize="small">New Bucketlist</Button>
        ));
        expect(wrapper.containsMatchingElement(
            <PageHeader bsStyle="primary">Austin Roy <small>Your Bucketlists </small></PageHeader>
        ))
    })
    it('renders bucketlists panel component',()=> {
        const wrapper = shallow(<BucketlistsPage {...props}/>);
        expect(wrapper.find('Panel').first()).toBeTruthy
    })
    it('renders modal', ()=> {
        const wrapper = shallow(<BucketlistsPage {...props}/>);
        expect(wrapper.find('Modal').first()).toBeTruthy 
    })
})