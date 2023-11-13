const mongoose = require("mongoose")

const questionSchema = mongoose.Schema({
  question: String,
  role: String,
  difficulty: String,
  modelAnswer: String,
  avgTimeToExplain: Number,
})

const Question = mongoose.model("question", questionSchema)

module.exports = Question
