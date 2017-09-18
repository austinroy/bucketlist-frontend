export const createBucketlist = () => ({
  type: 'CREATE_BUCKETLIST'
})

export const updateBucketlist = () => ({
  type: 'UPDATE_BUCKETLIST',
  bucketlist
})

export const deleteBucketlist = () => ({
  type: 'DELETE_BUCKETLIST'
})

export const createBucketlistItem = () => ({
  type: 'CREATE_BUCKETLIST_ITEM',
  bucketlist_item
})

export const updateBucketlistItem = () => ({
  type: 'UPDATE_BUCKETLIST_ITEM',
  bucketlist_item
})

export const deleteBucketlistItem = () => ({
  type: 'DELETE_BUCKETLIST_ITEM'
})