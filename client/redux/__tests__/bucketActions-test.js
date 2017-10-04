import * as actions from  '../bucket/actions'
import expect from 'expect'
import nock from 'nock'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe("Bucketlist actions tests", ()=>{
    let store;

    beforeEach(() => {
        store = mockStore({})
    })

    afterEach(() => {
        nock.cleanAll()
    })

    it("Should create a FETCH_BUCKETLISTS_SUCCESS when bucketlists are fetched successfully", ()=>{
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

        
        nock('http://localhost:5000')
            .get('/bucketlists/')
            .reply(200,{bucketlists})

        const expectedAction = [{
            type: 'FETCH_BUCKETLISTS_SUCCESS',
            bucketlists
        }]
        // const act = store.dispatch(actions.fetchBucketlists())
        // console.log(act)

        return store.dispatch(actions.fetchBucketlists())
            .then(()=> {
                expect(store.getActions()).toEqual(expectedAction)
            })

    })
})
