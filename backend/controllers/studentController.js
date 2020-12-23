import asyncHandler from 'express-async-handler'
import Student from '../models/studentModel.js'

//@desc Fetch all students
//@route GET /api/students
//@access Public
const getStudents = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1
  const keyword = req.query.keyword
    ? {
        lastName: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}
  const count = await Student.countDocuments({ ...keyword })
  const active = await Student.countDocuments({ isActive: true })
  const students = await Student.find({ ...keyword })
    .sort({ isActive: -1, lastName: 1 })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({
    students,
    page,
    count,
    active,
    pages: Math.ceil(count / pageSize),
  })
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

// Delete a student with id
//@route DELETE /api/students/:id
//access Private/admin

export const deleteStudent = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id)
  if (student) {
    await student.remove()
    res.json({ message: 'Student removed' })
  } else {
    res.status(404)
    throw new Error('Student not found')
  }
})

//Create a student
//@route POST /api/students
//@access Private/admin

export const createStudent = asyncHandler(async (req, res) => {
  const student = new Student({
    user: req.user._id,
    firstName: 'first',
    lastName: 'last',
    email: 'sample@example.com',
    teacher: 'Ken Tee',
    gender: 'female',
    dob: '1-12-1999',
    parent: 'mommy',
    instrument: 'violin',
    knowAboutUs: 'newspaper',
    setAmount: 25.0,
    phone: '770-555-5555',
    classDay: 'friday',
    classTime: '2:30pm',
    address: {
      street: '5555 right St.',
      city: 'Norcross',
      state: 'Ga',
      postalCode: 50505,
    },
  })
  const createdStudent = await student.save()
  res.status(201).json(createdStudent)
})

//Update a student with id
//route PUT /api/students/:id
//access Private/admin

export const updateStudent = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    teacher,
    gender,
    dob,
    parent,
    instrument,
    knowAboutUs,
    setAmount,
    phone,
    classDay,
    classTime,
    address,
    isActive,
  } = req.body
  const student = await Student.findById(req.params.id)
  if (student) {
    student.firstName = firstName
    student.lastName = lastName
    student.email = email
    student.teacher = teacher
    student.gender = gender
    student.dob = dob
    student.parent = parent
    student.instrument = instrument
    student.knowAboutUs = knowAboutUs
    student.setAmount = setAmount
    student.phone = phone
    student.classDay = classDay
    student.classTime = classTime
    student.isActive = isActive
    student.address = Object.assign({}, address)

    const updatedStudent = await student.save()
    res.json(updatedStudent)
  } else {
    res.status(404)
    throw new Error('Student not found')
  }
})

// export const updateStudentActiveToggle = asyncHandler(async (req, res) => {
//   const student = await Student.findById(req.params.id)

//   if (student) {
//     student.isActive = !student.isActive

//     const updatedStudent = await student.save()

//     res.json(updatedStudent)
//   } else {
//     res.status(404)
//     throw new Error('Student not found')
//   }
// })
