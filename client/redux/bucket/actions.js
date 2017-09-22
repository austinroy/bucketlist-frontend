import axios from 'axios';

const baseUrl = '127.0.0.1:5000';

export const createBucketlistSuccess = () => ({
  type: 'CREATE_BUCKETLIST_SUCCESS'
});

export const updateBucketlistSuccess = () => ({
  type: 'UPDATE_BUCKETLIST_SUCCESS',
  bucketlist
});

export const deleteBucketlistSuccess = () => ({
  type: 'DELETE_BUCKETLIST_SUCESS'
});

export const createBucketlistItemSuccess = () => ({
  type: 'CREATE_BUCKETLIST_ITEM_Success',
  bucketlist_item
});

export const updateBucketlistItemSuccess = () => ({
  type: 'UPDATE_BUCKETLIST_ITEM_SUCCESS',
  bucketlist_item
});

export const deleteBucketlistItemSucess = () => ({
  type: 'DELETE_BUCKETLIST_ITEM_SUCESS'
});

export const fetchBucketlistsSuccess = () => ({
  type: 'FETCH_BUCKETLISTS_SUCCESS',
  bucketlists
});

export const fetchBucketlists = (dispatch, credentials) => {
  axios.get('http://localhost:5000/bucketlists/', credentials).then(res =>
  console.log(res.data));
};

export const fetchSingleBucketlists = (dispatch, credentials, bucket_id) => {
  const url = 'http://localhost:5000/bucketlists/'+ bucket_id;
  axios.get(url, credentials).then(res =>
  console.log(res.data));
};

export const updateBucketlist = (dispatch, credentials, bucket_id, data) => {
  const url = 'http://localhost:5000/bucketlists/'+ bucket_id;
  axios.put(url,data ,credentials).then(res =>
  console.log(res.data));
};

export const newBucketlist = (dispatch, credentials) => {
  axios.post('http://localhost:5000/bucketlists/', credentials)
};

export const deleteBucketlist = (dispatch, credentials, bucket_id) => {
  const url = 'http://localhost:5000/bucketlists/'+ bucket_id;
  axios.delete(url, credentials).then(res =>
  console.log(res.data));
};

export const searchBucketlist = (dispatch, credentials, bucket_name) => {
  const url = 'http://localhost:5000/bucketlists/q='+ bucket_id;
  axios.get(url, credentials).then(res =>
  console.log(res.data));
};

export const newBucketlistItem = (dispatch, credentials, bucket_id, data) => {
  const url = 'http://localhost:5000/bucketlists/'+ bucket_id;
  axios.post(url, data, credentials)
};

export const updateBucketlistItem = (dispatch, credentials, bucket_id, item_id, data) => {
  const url = "http://localhost:5000/bucketlists/${bucket_id}/${item_id}";
  axios.put(url,data ,credentials).then(res =>
  console.log(res.data));
};

export const deleteBucketlistItem = (dispatch, credentials, bucket_id) => {
  const url = 'http://localhost:5000/bucketlists/'+ bucket_id;
  axios.delete(url, credentials).then(res =>
  console.log(res.data));
};