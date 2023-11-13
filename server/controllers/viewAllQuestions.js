// const Closed = require("../models/closed_interviews.model")
const Question = require("../models/questions.model")

const viewAllQuestions = async (req, res) => {
  try {
    const allQs = await Question.find()
    allQs.length
      ? res.status(200).send({ questions: allQs })
      : res.status(400).send({ error: "No question found." })
  } catch (error) {
    res.status(400).send({ error: `${error}` })
  }
}

module.exports = viewAllQuestions
