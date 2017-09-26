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

export const fetchBucketlistsSuccess = (bucketlists) => ({
  type: 'FETCH_BUCKETLISTS_SUCCESS',
  bucketlists
});

export const fetchBucketlists = (dispatch) => {
  axios.get('http://localhost:5000/bucketlists/').then(res => {
    console.log("fetched buckets: ",res.data.Bucketlist);
    const bucketlists = res.data.Bucketlist;
    dispatch(fetchBucketlistsSuccess(bucketlists));
  })
};

export const fetchSingleBucketlists = (dispatch, credentials, bucket_id) => {
  const url = 'http://localhost:5000/bucketlists/'+ bucket_id;
  axios.get(url, credentials).then(res =>
  console.log(res.data));
};

export const updateBucketlist = (data) => {
  const url = 'http://localhost:5000/bucketlists/'+ data.id;
  axios.put(url,data).then(res =>
  console.log(res.data));
};

export const createBucketlist = (data) => {
  return () => {
    return axios.post('http://localhost:5000/bucketlists/', data)
  }
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

export const newBucketlistItem = (data) => {
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