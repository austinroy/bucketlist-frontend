import axios from 'axios';

import fetch from 'isomorphic-fetch';

const baseUrl = '127.0.0.1:5000';

export const createBucketlistSuccess = () => ({
  type: 'CREATE_BUCKETLIST_SUCCESS',
  bucketlist
});

export const updateBucketlistSuccess = (bucketlist) => ({
  type: 'UPDATE_BUCKETLIST_SUCCESS',
  bucketlist
});

export const deleteBucketlistSuccess = () => ({
  type: 'DELETE_BUCKETLIST_SUCCESS'
});

export const createBucketlistItemSuccess = () => ({
  type: 'CREATE_BUCKETLIST_ITEM_SUCCESS',
  bucketlist_item
});

export const updateBucketlistItemSuccess = () => ({
  type: 'UPDATE_BUCKETLIST_ITEM_SUCCESS',
  bucketlist_item
});

export const deleteBucketlistItemSucess = () => ({
  type: 'DELETE_BUCKETLIST_ITEM_SUCESS'
});

export const fetchBucketlistsSuccess = (bucketlists) => ({
  type: 'FETCH_BUCKETLISTS_SUCCESS',
  bucketlists
});

export const fetchBucketlists = () => (dispatch) => {
  console.log('Fetch bucketlists was called!');
  return fetch('http://localhost:5000/bucketlists/',{
    headers: {
      'Content-Type': 'application/json'
    },method: 'GET'
  })
  .then(res => {
    if(!res.ok){
      return res.json().then(Promise.reject.bind(Promise));
    }
    return res.json();
  })
  .then(json => {
    const { bucketlists } = json;
    return dispatch(fetchBucketlistsSuccess(bucketlists));
  }) 
  .catch(err => {
    console.log('There was an error', err);
  })
};

export const updateBucketlist = (data) => {
  return () => {
    const url = 'http://localhost:5000/bucketlists/'+ data.id;
    axios.put(url,data).then(res =>
    console.log(res.data));ç  
  }
};

export const createBucketlist = (data) => {
  return () => {
    return axios.post('http://localhost:5000/bucketlists/', data)
  }
};

export const deleteBucketlist = (data) => {
  return () => {
    const url = 'http://localhost:5000/bucketlists/'+ data.id;
    axios.delete(url).then(res =>
    console.log(res.data));
  }
};

export const searchBucketlist = (dispatch, credentials, bucket_name) => {
  const url = 'http://localhost:5000/bucketlists/q='+ bucket_id;
  axios.get(url, credentials).then(res =>
  console.log(res.data));
};

export const newBucketlistItem = (data) => {
  console.log("creating new item");
  const url = 'http://localhost:5000/bucketlists/'+ data.bucketlist_id +"/items/";
  axios.post(url, data);
};

export const updateBucketlistItem = (data) => {
  const url = "http://localhost:5000/bucketlists/"+ data.bucketlist_id +"/items/" + data.id;
  axios.put(url,data).then(res =>
  console.log(res.data));
};

export const deleteBucketlistItem = (data) => {
  const url = 'http://localhost:5000/bucketlists/'+ data.bucketlist_id + "/items/" + data.id;
  axios.delete(url).then(res =>
  console.log(res.data));
};