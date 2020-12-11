import asyncHandler from 'express-async-handler'
import Student from '../models/studentModel.js'

//@desc Fetch all students
//@route GET /api/students
//@access Public
const getStudents = asyncHandler(async (req, res) => {
  // const pageSize = 10
  // const page = Number(req.query.pageNumber) || 1
  // const keyword = req.query.keyword
  //   ? {
  //       name: {
  //         $regex: req.query.keyword,
  //         $options: 'i',
  //       },
  //     }
  //   : {}
  // const count = await Student.countDocuments({ ...keyword })
  // const students = await Student.find({ ...keyword })
  //   .limit(pageSize)
  //   .skip(pageSize * (page - 1))

  // res.json({ students, page, pages: Math.ceil(count / pageSize) })

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const students = await Student.find({ ...keyword })
  res.json({ students })
})

//@desc Fetch single students
//@route GET /api/students/:id
//@access Public
const getStudentById = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id)

  if (student) {
    res.json(student)
  } else {
    res.status(404)
    throw new Error('Student not found')
  }
})

export { getStudents, getStudentById }
