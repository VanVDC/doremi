import mongoose from 'mongoose'

const invoiceSchema = mongoose.Schema(
  {
    invoiceItem: [
      {
        date: { type: Date },
        price: { type: Number, required: true },
        student: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Student',
        },
      },
    ],
    paymentMethod: {
      type: String,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
)

const Invoice = mongoose.model('Order', invoiceSchema)

export default Invoice
