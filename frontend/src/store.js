import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  studentListReducer,
  studentDetailsReducer,
  studentCreateReducer,
  studentDeleteReducer,
  studentUpdateReducer,
} from './reducers/studentReducers'

const reducer = combineReducers({
  studentList: studentListReducer,
  studentDetails: studentDetailsReducer,
  studentDelete: studentDeleteReducer,
  studentCreate: studentCreateReducer,
  studentUpdate: studentUpdateReducer,
})

const middleware = [thunk]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
