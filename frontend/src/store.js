import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer } from './reducers/userReducers'
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
  userLogin: userLoginReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
