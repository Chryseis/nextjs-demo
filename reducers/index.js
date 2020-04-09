import { combineReducers } from 'redux'
import navigation from '../reducers/navigation'
import support from '../reducers/support'

const reducer = combineReducers({
    navigation,
    support
})

export default reducer
