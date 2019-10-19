import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './actionTypes'

import * as reducers from './reducers'

describe('searchRobotsReducer', () => {
  const initialStateSearch = {
    searchField: ''
  }

  it('should return the initial state', () => {
    expect(reducers.searchRobotsReducer(undefined, {})).toEqual({
      searchField: ''
    })
  })

  it('should handle CHANGE_SEARCH_FIELD', () => {
    expect(
      reducers.searchRobotsReducer(initialStateSearch, {
        type: CHANGE_SEARCH_FIELD,
        payload: 'hello this is a cool test'
      })
    ).toEqual({
      searchField: 'hello this is a cool test'
    })
  })
})

describe('requestRobotsReducer', () => {
  const initialStateRobots = {
    robots: [],
    isPending: false,
    error: ''
  }

  it('should return the initial state', () => {
    expect(reducers.requestRobotsReducer(undefined, {})).toEqual(
      initialStateRobots
    )
  })

  it('should handle REQUEST_ROBOTS_PENDING action', () => {
    expect(
      reducers.requestRobotsReducer(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING
      })
    ).toEqual({
      robots: [],
      error: '',
      isPending: true
    })
  })

  it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
    expect(
      reducers.requestRobotsReducer(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: '333',
            name: 'test_name',
            email: 'test_email@gmail.com'
          }
        ]
      })
    ).toEqual({
      robots: [
        {
          id: '333',
          name: 'test_name',
          email: 'test_email@gmail.com'
        }
      ],
      error: '',
      isPending: false
    })
  })

  it('should handle REQUEST_ROBOTS_FAILED action', () => {
    expect(
      reducers.requestRobotsReducer(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: 'BOOOM >>>> BUFFFF......'
      })
    ).toEqual({
      robots: [],
      error: 'BOOOM >>>> BUFFFF......',
      isPending: false
    })
  })
})
