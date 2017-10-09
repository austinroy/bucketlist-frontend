import React from 'react'
import expect from 'expect'
import { mount, shallow } from 'enzyme'
import sinon from 'sinon'
import { ListGroup, ListGroupItem, Button, ButtonToolbar, Modal, 
  Form, FormGroup, Col, ControlLabel, FormControl, ButtonGroup } from 'react-bootstrap';

import { ItemsList }  from '../BucketlistView/ItemsList.jsx'
import initialState from '../../redux/initialState'

const props = {
    items: initialState.bucketlists[0].items,
    state : {
        showModal: false
    }
}

describe('ItemsList', () =>{
    it('renders without breaking', () =>{
        const wrapper = shallow(<ItemsList {...props}/>)
    })
    it('renders modal', ()=> {
        const wrapper = shallow(<ItemsList {...props}/>);
        expect(wrapper.find('Modal').first()).toBeTruthy 
    })
})