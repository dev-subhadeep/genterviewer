const dotenv = require("dotenv")
dotenv.config()

const { Configuration, OpenAIApi } = require("openai")

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
  })
)

const generate = (interviewFile) =>
  openai
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: interviewFile }],
    })
    .then((res) => res.data.choices[0].message.content)
    .catch((error) => {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      )
    })

// console.log(grade(JSON.stringify(qna)))

module.exports = generate
