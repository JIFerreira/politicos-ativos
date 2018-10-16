import { combineReducers } from 'redux'
import politicalReducer from '../political/politicalReducers'

const rootReducer = combineReducers({
    political: politicalReducer
})

export default rootReducer