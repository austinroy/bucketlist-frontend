import React from 'react'
import expect from 'expect'
import { mount, shallow } from 'enzyme'
import sinon from 'sinon';

import { BucketPanel }  from '../BucketlistView/BucketPanel'
import initialState from '../../redux/initialState'

const props = {
    bucketlists: initialState.bucketlists
}

describe('BucketPanel', () =>{
    it('renders without breaking', () =>{
        const wrapper = shallow(<BucketPanel {...props}/>)
    })
    it('renders Bucket component', ()=>{
        const wrapper = shallow(<BucketPanel {...props}/>)
        expect(wrapper.find('Bucket')).toBeTruthy
    })
})