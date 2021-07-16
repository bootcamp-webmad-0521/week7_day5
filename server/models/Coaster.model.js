const { Schema, model } = require("mongoose")

const coasterSchema = new Schema({
  title: String,
  description: String,
  inversions: Number,
  length: Number,
  imageUrl: String
}, {
  timestamps: true
})

const Coaster = model("Coaster", coasterSchema)

module.exports = Coaster