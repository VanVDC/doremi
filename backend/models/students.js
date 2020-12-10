import mongoose from 'mongoose'

const invoiceSchema = mongoose.Schema(
  {
    amount: { type: Number, required: true },
    currentDate: { type: String, required: true },
    dueDate: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const studentSchema = mongoose.Schema(
  {
    teacher: {
      type: String,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    parent: {
      type: String,
    },
    dob: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    instrument: {
      type: String,
      required: true,
    },
    knowAboutUs: {
      type: String,
    },
    phone: {
      type: Number,
      required: true,
    },
    classDay: {
      type: String,
    },
    classTime: {
      type: String,
    },
    address: {
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      postalCode: {
        type: Number,
        required: true,
      },
    },
    invoices: [invoiceSchema],
  },
  {
    timestamps: true,
  }
)

const Student = mongoose.model('Product', studentSchema)

export default Student
