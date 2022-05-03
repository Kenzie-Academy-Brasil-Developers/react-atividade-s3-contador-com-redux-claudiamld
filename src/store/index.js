import {legacy_createStore as createStore, combineReducers} from 'redux';
import reducerCounter from './modules/counter/reducer'

const reducers = combineReducers({numbers: reducerCounter})
const store = createStore(reducers)

export default store