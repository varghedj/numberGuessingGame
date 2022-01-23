let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

let generateTarget = () => Math.floor(Math.random() * 10)

let compareGuesses = (hum, cpu, target) => {
  humGap = Math.abs(target - hum)
  cpuGap = Math.abs(target - cpu)

  if (humGap < cpuGap || humGap === cpuGap) {
    return true
  } else {
    return false
  }
}

let updateScore = winner => {
  switch (winner) {
    case 'human':
      humanScore += 1
      break
    case 'computer':
      computerScore += 1
      break
  }
}

let advanceRound = () => currentRoundNumber += 1