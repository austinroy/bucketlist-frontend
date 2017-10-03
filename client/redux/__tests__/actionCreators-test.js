import * as actions from  '../bucket/actions'

describe('Action creators', () => {
  it('should create fetch success action correctly', () => {
    const bucketlists = [
            {
                id: 1,
                name: "BucketList1",
                items: [
                    {
                        id: 3,
                        name: "I need to do X",
                        date_created: "2015-08-12 11:57:23",
                        date_modified: "2015-08-12 11:57:23",
                        done: false,
                        bucketlist_id: 1
                    },
                    {
                        id: 4,
                        name: "I need to do Y",
                        date_created: "2015-08-12 11:57:23",
                        date_modified: "2015-08-12 11:57:23",
                        done: false,
                        bucketlist_id: 1
                    }
                ],
                date_created: "2015-08-12 11:57:23",
                date_modified: "2015-08-12 11:57:23",
                created_by: "1113456"
            },
            {
                id: 2,
                name: "BucketList2",
                items: [
                    {
                    id: 1,
                    name: "I need to do X",
                    date_created: "2015-08-12 11:57:23",
                    date_modified: "2015-08-12 11:57:23",
                    done: false,
                    bucketlist_id: 2
                    }
                ],
                date_created: "2015-08-12 11:57:23",
                date_modified: "2015-08-12 11:57:23",
                created_by: "1113456"
                },
        ]
    const expectedAction = {
      type: 'FETCH_BUCKETLISTS_SUCCESS',
      bucketlists
    }
    expect(actions.fetchBucketlistsSuccess(bucketlists)).toEqual(expectedAction)
  })
  it("creates an update to add to a bucketlist", ()=>{
    const bucketlist = {
                id: 1,
                name: "BucketList1",
                items: [
                    {
                        id: 3,
                        name: "I need to do X",
                        date_created: "2015-08-12 11:57:23",
                        date_modified: "2015-08-12 11:57:23",
                        done: false,
                        bucketlist_id: 1
                    },
                    {
                        id: 4,
                        name: "I need to do Y",
                        date_created: "2015-08-12 11:57:23",
                        date_modified: "2015-08-12 11:57:23",
                        done: false,
                        bucketlist_id: 1
                    }
                ],
                date_created: "2015-08-12 11:57:23",
                date_modified: "2015-08-12 11:57:23",
                created_by: "1113456"
            }
    const expectedAction = {
        type: 'UPDATE_BUCKETLIST_SUCCESS',
        bucketlist
    }
    expect(actions.updateBucketlistSuccess(bucketlist)).toEqual(expectedAction)
  })
})