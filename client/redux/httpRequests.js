import axios from 'axios';

const baseUrl = '127.0.0.1:5000';

const registerUserRequest = (data) => {
    axios.post('${baseUrl}/auth/register/', data);
}

const loginUserRequest = (data) => {
     axios.post('${baseUrl}/auth/register/', data);
}

const getBucketlistsRequest = (credentials) => {
     axios.get('${baseUrl}/bucketlists/', credentials);
}

const addBucketlistRequest = (data, credentials) => {
     axios.post('${baseUrl}/bucketlists/', data ,credentials );
}

const getSingleBucketlistRequest = (bucket_id, credentials) => {
     axios.get('${baseUrl}/bucketlists/${bucket_id}');
}

const searchBucketlistsRequest = (bucketname, credentials) => {
     axios.get('${baseUrl}/bucketlists/?=${bucketname}', credentials);
}

const updateBucketlistRequest = (bucket_id, data , credentials) => {
     axios.put('${baseUrl}/bucketlists/${bucket_id}',data, credentials);
}

const createBucketlistItemsRequest = (bucket_id, data, credentials) => {
     axios.post('${baseUrl}/bucketlists/${bucket_id}/', data , credentials);
}

const updateBucketlistItemsRequest = (bucket_id, item_id, data,credentials) => {
     axios.put('${baseUrl}/bucketlists/${bucket_id}/=> {item_id}', data, credentials);
}

const deleteBucketlistItemsRequest = (bucket_id, item_id, credentials) => {
     axios.delete('${baseUrl}/bucketlists/${bucket_id}/=> {item_id}', credentials);
}


