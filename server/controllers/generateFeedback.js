const fs = require("fs")
const generate = require("../utils/generate")
const { feedback } = require("../utils/prompts")
const Session = require("../models/session.model")
const Question = require("../models/questions.model")

const generateFeedback = async (req, res) => {
  const { filename } = req.params
  const data = fs.readFileSync(`./interviews/${filename}.txt`)
  const prompt = `${feedback.toString()} ${data.toString()}`
  try {
    const solutions = await Session.findById(filename).select({
      questions: 1,
      _id: 0,
    })
    let modelAnswers = []
    for (let i = 0; i < solutions.questions.length; i++) {
      const q = await Question.findById(solutions.questions[i])
      modelAnswers.push({ Question: q.question, Answer: q.modelAnswer })
    }

    const result = await generate(prompt)
    res.send({ result, modelAnswers })
  } catch (error) {
    res.status(500).send({ error: `${error}` })
  }
}

module.exports = generateFeedback
