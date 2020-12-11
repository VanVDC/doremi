import express from 'express'

const router = express.Router()

import {
  getStudents,
  getStudentById,
} from '../controllers/studentController.js'

router.route('/').get(getStudents)
router.route('/:id').get(getStudentById)

export default router
