const feedback = (
  interview
) => `Imagine you are an interviewer at a software development company. Your job is to find out if a candidate is the right fit for the job. You will be given a series of questions and answers. Your job is to figure out if the candidate is a right fit for your company. You should judge the candidate based on his communication skills and the accuracy of his answers. Based on the answers you need to share feedback about his strengths and weaknesses and say whether the candidate is getting hired and recommended personally, hired, pushed to the waiting list or rejected. Make the response conversational and use simple English.
Here are the set of questions and answers:
${interview}
`

const feedbackJSON = (interview) => `
Imagine you are an interviewer at a software development company. Your job is to find out if a candidate is the right fit for the job. You will be given a series of questions and answers. Your job is to figure out if the candidate is a right fit for your company. You should judge the candidate based on his communication skills and the accuracy of his answers. Based on the answers you need to share feedback about his strengths and weaknesses and say whether the candidate is getting hired and recommended personally, hired, pushed to the waiting list or rejected. Rate his accuracy, communication, knowledge on a scale of 10. Give a cumulative feedback as well. Please present the response as a json file which should look something like this:
<code>
{
  "accuracy": 8.0,
  "communication": 9.0,
  "knowledge": 10,
  "hire_status": "waitlist"/"hired"/"recommended"/"rejected"
  "summary": "Your fundamentals are great but here are somethings you can work on..."
}
</code>
Here are the set of questions and answers:
${interview}
`

module.exports = {
  feedback,
  feedbackJSON,
}
