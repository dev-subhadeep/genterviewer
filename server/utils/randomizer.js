function randomizer(arr, x) {
  const shuffledArray = [...arr]

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
  }

  const result = shuffledArray.slice(0, x)

  return result
}

module.exports = randomizer
