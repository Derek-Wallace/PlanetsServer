import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Planet = new Schema({
  name: { type: String, required: true },
  starId: { type: String, required: true }
},
{ timestamps: true, toJSON: { virtuals: true } }
)
export default Planet
