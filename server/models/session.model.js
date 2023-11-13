const mongoose = require("mongoose")
const Question = require("./questions.model")

const sessionSchema = mongoose.Schema(
  {
    sessionID: String,
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "question" }],
    responses: [String],
    duration: Number,
    feedback: String,
  },
  {
    timestamps: true,
  }
)

const Session = mongoose.model("session", sessionSchema)

module.exports = Session
