import axios from 'axios';

const baseUrl = '127.0.0.1:5000'

function registerUser(data){
    axios.post('${baseUrl}/auth/register/', data);
}

function loginUser(data){
    axios.post('${baseUrl}/auth/register/', data);
}
function getBucketlists(data){
    axios.get('${baseUrl}/bucketlists/', credentials);
}

function addBucketlist(data, credentials){
    axios.post('${baseUrl}/bucketlists/', data ,credentials );
}

function getSingleBucketlist(bucket_id, credentials){
    axios.get('${baseUrl}/bucketlists/${bucket_id}');
}

function searchBucketlists(bucketname, credentials){
    axios.get('${baseUrl}/bucketlists/?=${bucketname}', credentials);
}

function updateBucketlist(bucket_id, data , credentials){
    axios.put('${baseUrl}/bucketlists/${bucket_id}',data, credentials);
}

function createBucketlistItems(bucket_id, data, credentials){
    axios.post('${baseUrl}/bucketlists/${bucket_id}/', data , credentials);
}

function updateBucketlistItems(bucket_id, item_id, data,credentials){
    axios.put('${baseUrl}/bucketlists/${bucket_id}/{item_id}', data, credentials);
}

function deleteBucketlistItems(bucket_id, item_id, credentials){
    axios.delete('${baseUrl}/bucketlists/${bucket_id}/{item_id}', credentials);
}


