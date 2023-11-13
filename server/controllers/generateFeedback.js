const fs = require("fs")
const generate = require("../utils/generate")
const { feedback } = require("../utils/prompts")

const generateFeedback = async (req, res) => {
  const { filename } = req.params
  const data = fs.readFileSync(`./interviews/${filename}.txt`)
  const prompt = `${feedback.toString()} ${data.toString()}`
  try {
    const result = await generate(prompt)
    res.send(result)
  } catch (error) {
    res.status(500).send({ error: `${error}` })
  }
}

module.exports = generateFeedback
