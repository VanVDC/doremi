import dotenv from 'dotenv'
import users from './data/users.js'
import students from './data/students.js'
import User from './models/userModel.js'
import Student from './models/studentModel.js'
import Invoice from './models/invoiceModel.js'

import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Invoice.deleteMany()
    await Student.deleteMany()
    await User.deleteMany()

    const createdUser = await User.insertMany(users)

    const adminUser = createdUser[0]._id

    const sampleStudents = students.map((student) => {
      return { ...student, user: adminUser }
    })

    await Student.insertMany(sampleStudents)

    console.log('data imported!')
    process.exit()
  } catch (err) {
    console.error(`${err}`)
    process.exit(1)
  }
}

const destroyedData = async () => {
  try {
    await Invoice.deleteMany()
    await Student.deleteMany()
    await User.deleteMany()

    console.log('data destroyed!')
    process.exit()
  } catch (err) {
    console.error(`${err}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyedData()
} else {
  importData()
}
