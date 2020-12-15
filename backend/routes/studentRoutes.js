import express from 'express'

const router = express.Router()

import {
  getStudents,
  getStudentById,
  deleteStudent,
  createStudent,
  updateStudent,
} from '../controllers/studentController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getStudents).post(protect, admin, createStudent)
router
  .route('/:id')
  .get(getStudentById)
  .delete(deleteStudent)
  .put(updateStudent)

export default router
