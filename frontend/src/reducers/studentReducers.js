import {
  STUDENT_DETAILS_FAIL,
  STUDENT_DETAILS_REQUEST,
  STUDENT_DETAILS_SUCCESS,
  STUDENT_LIST_FAIL,
  STUDENT_LIST_REQUEST,
  STUDENT_LIST_SUCCESS,
} from '../constants/studentConstants'

export const studentListReducer = (state = { students: [] }, action) => {
  switch (action.type) {
    case STUDENT_LIST_REQUEST:
      return { loading: true, students: [] }
    case STUDENT_LIST_SUCCESS:
      return {
        loading: false,
        students: action.payload.students,
      }
    case STUDENT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const studentDetailsReducer = (
  state = { student: { invoices: [] } },
  action
) => {
  switch (action.type) {
    case STUDENT_DETAILS_REQUEST:
      return { ...state, loading: true }
    case STUDENT_DETAILS_SUCCESS:
      return { loading: false, student: action.payload }
    case STUDENT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
