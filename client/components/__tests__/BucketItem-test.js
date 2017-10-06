import React from 'react'
import expect from 'expect'
import { mount, shallow } from 'enzyme'
import sinon from 'sinon'
import { ListGroup, ListGroupItem, Button, ButtonToolbar, Modal, 
  Form, FormGroup, Col, ControlLabel, FormControl, ButtonGroup } from 'react-bootstrap';

import { BucketItem }  from '../BucketlistView/BucketItem'
import initialState from '../../redux/initialState'

const props = {
    item: initialState.bucketlists[0].items[0],
    state : {
        showModal: false
    }
}

describe('BucketItem', () =>{
    it('renders without breaking', () =>{
        const wrapper = shallow(<BucketItem {...props}/>)
    })
    it('renders modal', ()=> {
        const wrapper = shallow(<BucketItem {...props}/>);
        expect(wrapper.find('Modal').first()).toBeTruthy 
    })
    it('renders ItemList component', ()=>{
        const wrapper = shallow(<BucketItem {...props}/>);
        expect(wrapper.find('ItemList')).toBeTruthy;
    })
    it('renders group of option buttons', ()=>{
        const wrapper = shallow(<BucketItem {...props}/>);
        expect(wrapper.containsMatchingElement(
            <ButtonGroup className="pull-right">
                <Button bsSize="xsmall" bsStyle="info">Edit</Button>
                <Button bsSize="xsmall" bsStyle="success">Done</Button>
                <Button bsSize="xsmall" bsStyle="danger">Delete</Button>
            </ButtonGroup>
        )).toBeTruthy
    })
})