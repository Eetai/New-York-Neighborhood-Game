import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ADDRESSES = 'GET_ADDRESSES'

/**
 * INITIAL STATE
 */
const defaultAddresses = {}

/**
 * ACTION CREATORS
 */

const getAddresses = (addresses) => ({ type: GET_ADDRESSES, addresses })
/**
 * THUNK CREATORS
 */

export const randomData = () => {
  return dispatch => {
    axios.get('/api/addresses/randomData')
      .then(res => {
        dispatch(getAddresses(res.data))
      })
      .catch(err => console.log(err))
  }
}

/**
 * REDUCER
 */

export default function (state = defaultAddresses, action) {
  switch (action.type) {
    case GET_ADDRESSES:
      return action.addresses
    default:
      return state
  }
}
