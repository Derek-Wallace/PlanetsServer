import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Moon = new Schema({
  name: { type: String, required: true },
  planetId: { type: String, required: true }
},
{ timestamps: true, toJSON: { virtuals: true } }
)
export default Moon
