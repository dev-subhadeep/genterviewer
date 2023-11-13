const jwt = require("jsonwebtoken")
const Question = require("../models/questions.model")
const randomizer = require("../utils/randomizer")
const Session = require("../models/session.model")
require("dotenv").config()

const createSession = async (req, res) => {
  const { role, difficulty, length, user } = req.body

  try {
    const allQuestions = await Question.find({ role, difficulty })

    if (allQuestions.length) {
      const questions = randomizer(allQuestions, length || 5)

      const durationAggregate = await Question.aggregate([
        {
          $match: {
            _id: { $in: questions.map((q) => q._id) },
          },
        },
        {
          $group: {
            _id: null,
            totalDuration: { $sum: "$avgTimeToExplain" },
          },
        },
      ])

      const duration = durationAggregate.length
        ? durationAggregate[0].totalDuration
        : 0

      const sessionID = jwt.sign({ user, duration }, process.env.JWT_SECRET, {
        expiresIn: duration * 60,
      })

      const session = await Session.create({ questions, sessionID, duration })

      res
        .status(200)
        .send({ questions, sessionID, duration, session_id: session._id })
    } else {
      res.status(400).send({ error: "No question found" })
    }
  } catch (error) {
    res.status(500).send({ error: `${error}` })
  }
}

module.exports = createSession
