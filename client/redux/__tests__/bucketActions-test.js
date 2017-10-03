import * as actions from  '../bucket/actions'
import expect from 'expect'
import MockAdapter from 'axios-mock-adapter'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import axios from 'axios'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe("Bucketlist actions tests", ()=>{
    let store;

    beforeEach(() => {
        store = mockStore({})
    })

    afterEach(() => {
    })

    it("Should create a FETCH_BUCKETLISTS_SUCCESS when bucketlists are fetched successfully", ()=>{
        const mock = new MockAdapter(axios)

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

        
        mock.onGet('http://localhost:5000/bucketlists/').reply(200, {Bucketlist: bucketlists})


        const expectedAction = {
            type: 'FETCH_BUCKETLISTS_SUCCESS',
            bucketlists
        }
        console.log("this is store", store)
        return store.dispatch(actions.fetchBucketlists()).then(()=> {
                expect(store.getActions().toEqual(expectedAction))
            })
        

    })
})