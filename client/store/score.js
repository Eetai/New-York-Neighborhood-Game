import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const UPDATE_SCORE = 'UPDATE_SCORE'

/**
 * INITIAL STATE
 */
const defaultScore = { correct: 0, false: 0 }

/**
 * ACTION CREATORS
 */

const updateScore = (answerBoolean) => ({ type: UPDATE_SCORE, answerBoolean })

/**
 * THUNK CREATORS
 */

// export const randomData = () => {
//   return dispatch => {
//     axios.get('/api/addresses/randomData')
//       .then(res => {
//         dispatch(getAddresses(res.data))
//       })
//       .catch(err => console.log(err))
//   }
// }

/**
 * REDUCER
 */

export default function (state = defaultScore, action) {
    switch (action.type) {
        case action.UPDATE_SCORE:
            if (answerBoolean === true) {
                return Object.assign({}, state, { correct: state.correct + 1 })
            }
            else {
                return Object.assign({}, state, { false: state.false + 1 })
            }

        default:
            return state
    }
}
