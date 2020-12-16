import axios from 'axios'
import {
  STUDENT_DELETE_FAIL,
  STUDENT_DELETE_REQUEST,
  STUDENT_DELETE_SUCCESS,
  STUDENT_DETAILS_FAIL,
  STUDENT_DETAILS_REQUEST,
  STUDENT_DETAILS_SUCCESS,
  STUDENT_LIST_FAIL,
  STUDENT_LIST_REQUEST,
  STUDENT_LIST_SUCCESS,
  STUDENT_CREATE_REQUEST,
  STUDENT_CREATE_FAIL,
  STUDENT_CREATE_SUCCESS,
  STUDENT_UPDATE_REQUEST,
  STUDENT_UPDATE_SUCCESS,
  STUDENT_UPDATE_FAIL,
} from '../constants/studentConstants'

export const listStudents = () => async (dispatch) => {
  try {
    dispatch({ type: STUDENT_LIST_REQUEST })
    const { data } = await axios.get(`/api/students`)
    dispatch({ type: STUDENT_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: STUDENT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const listStudentDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: STUDENT_DETAILS_REQUEST })
    const { data } = await axios.get(`/api/students/${id}`)
    dispatch({ type: STUDENT_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: STUDENT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const deleteStudent = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: STUDENT_DELETE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    await axios.delete(`/api/students/${id}`, config)
    dispatch({ type: STUDENT_DELETE_SUCCESS })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      // dispatch(logout())
    }
    dispatch({
      type: STUDENT_DELETE_FAIL,
      payload: message,
    })
  }
}

export const createStudent = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: STUDENT_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.post(`/api/students`, {}, config)
    dispatch({
      type: STUDENT_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      // dispatch(logout())
    }
    dispatch({
      type: STUDENT_CREATE_FAIL,
      payload: message,
    })
  }
}

export const updateStudent = (student) => async (dispatch, getState) => {
  try {
    dispatch({
      type: STUDENT_UPDATE_REQUEST,
    })
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.put(
      `/api/students/${student._id}`,
      student,
      config
    )

    dispatch({
      type: STUDENT_UPDATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      // dispatch(logout())
    }
    dispatch({
      type: STUDENT_UPDATE_FAIL,
      payload: message,
    })
  }
}
