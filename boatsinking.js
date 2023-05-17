function sinking(participant, rounds) {
    let remaining = participant;
    for (let i = 0; i < rounds.length; i++) {
      remaining = rounds[i] * Math.floor(remaining / rounds[i]);
    }
    return remaining;
  }
  
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function countRemainingParticipants() {
    rl.question("Enter the number of participants:", (numParticipants) => {
      rl.question("Enter the number of members required for each round, separated by commas:", (roundsString) => {
        let rounds = roundsString.split(",").map(round => parseInt(round.trim()));
  
        let remaining = sinking(numParticipants, rounds);
        console.log(`The number of participants remaining is ${remaining}`);
        rl.close();
      });
    });
  }
  
  countRemainingParticipants();