const Question = require("../models/questions.model")
const Session = require("../models/session.model")
const fs = require("fs")
const studentResponse = async (req, res) => {
  const { session, responses } = req.body
  try {
    const completed_session = await Session.findOneAndUpdate(
      { session },
      { responses },
      { new: true }
    )
    for (let i = 0; i < completed_session.questions.length; i++) {
      const q = await Question.findOne(
        { _id: completed_session.questions[i] },
        "question"
      )
      const a = completed_session.responses[i]
      fs.appendFileSync(
        `interviews/${completed_session._id.toString()}.txt`,
        `Question: ${q.question}\nAnswer: ${a}\n`
      )
    }
    res.status(200).send({ message: "Responses added" })
  } catch (error) {
    res.status(500).send({ error: `${error}` })
  }
}

module.exports = studentResponse
