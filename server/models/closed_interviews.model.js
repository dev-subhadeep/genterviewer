const mongoose = require("mongoose")

const clIntv = mongoose.Schema({
  session: String,
})

const Closed = mongoose.model("closedInterview", clIntv)

module.exports = Closed
