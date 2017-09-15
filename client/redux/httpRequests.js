import axios from 'axios';

function registerUser(){
    axios.post('/auth/register/');
}

function loginUser(){
    axios.post('/auth/register/');
}
function getBucketlists(){
    axios.get('/bucketlists/');
}

function addBucketlist(){
    axios.post('/bucketlists/');
}

function getSingleBucketlist(id){
    axios.get('/bucketlists/${id}');
}

function searchBucketlists(bucketname){
    axios.get('/bucketlists/?=${bucketname}');
}

function updateBucketlist(id){
    axios.put('/bucketlists/');
}

function createBucketlistItems(bucket_id){
    axios.post('/bucketlists/${bucket_id}/');
}

function updateBucketlistItems(bucket_id){
    axios.put('/bucketlists/${bucket_id}/');
}


