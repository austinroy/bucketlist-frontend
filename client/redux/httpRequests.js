import axios from 'axios';

const baseUrl = '127.0.0.1:5000'

function registerUser(data){
    return axios.post('${baseUrl}/auth/register/', data);
}

function loginUser(data){
    return axios.post('${baseUrl}/auth/register/', data);
}
function getBucketlists(data){
    return axios.get('${baseUrl}/bucketlists/', credentials);
}

function addBucketlist(data, credentials){
    return axios.post('${baseUrl}/bucketlists/', data ,credentials );
}

function getSingleBucketlist(bucket_id, credentials){
    return axios.get('${baseUrl}/bucketlists/${bucket_id}');
}

function searchBucketlists(bucketname, credentials){
    return axios.get('${baseUrl}/bucketlists/?=${bucketname}', credentials);
}

function updateBucketlist(bucket_id, data , credentials){
    return axios.put('${baseUrl}/bucketlists/${bucket_id}',data, credentials);
}

function createBucketlistItems(bucket_id, data, credentials){
    return axios.post('${baseUrl}/bucketlists/${bucket_id}/', data , credentials);
}

function updateBucketlistItems(bucket_id, item_id, data,credentials){
    return axios.put('${baseUrl}/bucketlists/${bucket_id}/{item_id}', data, credentials);
}

function deleteBucketlistItems(bucket_id, item_id, credentials){
    return axios.delete('${baseUrl}/bucketlists/${bucket_id}/{item_id}', credentials);
}


