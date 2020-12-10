import mongoose from 'mongoose'

const invoiceSchema = mongoose.Schema(
  {
    amount: { type: Number, required: true },
    currentDate: { type: Date },
    dueDate: { type: Date },
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
    setAmount: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
    parent: {
      type: String,
    },
    dob: {
      type: Date,
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
      type: string,
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

    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
    invoices: [invoiceSchema],
  },
  {
    timestamps: true,
  }
)

const Student = mongoose.model('Product', studentSchema)

export default Student
