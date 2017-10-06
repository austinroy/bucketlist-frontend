import React from 'react'
import expect from 'expect'
import { mount, shallow } from 'enzyme'
import sinon from 'sinon';

import { Bucket }  from '../BucketlistView/Bucket'
import initialState from '../../redux/initialState'

const props = {
    bucketlist: initialState.bucketlists[0]
}

describe('Bucket', () =>{
    it('renders without breaking', () =>{
        const wrapper = shallow(<Bucket {...props}/>)
    })
    it('renders Bucket component', ()=>{
        const wrapper = shallow(<Bucket {...props}/>)
        expect(wrapper.find('Panel')).toBeTruthy
    })
    it('renders modal', ()=> {
        const wrapper = shallow(<Bucket {...props}/>);
        expect(wrapper.find('Modal').first()).toBeTruthy 
    })
    it('renders ItemList component', ()=>{
        const wrapper = shallow(<Bucket {...props}/>)
        expect(wrapper.find('ItemList')).toBeTruthy
    })
})