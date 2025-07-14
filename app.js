let bank = 100
let oBank = document.getElementById("bank");
let oPerson = document.querySelector(".person");
let oComment = document.querySelector("#comment");
const players = [
  { teamNumber: 1, emoji: '🏃‍♂️', skill: 10, name: "D'Marcus Williums" },
  { teamNumber: 1, emoji: '🤾‍♂️', skill: 30, name: "Tyroil Smoochie-Wallace" },
  { teamNumber: 1, emoji: '🏇', skill: 88, name: "Jackmerius Tacktheratrix" },
  { teamNumber: 1, emoji: '🏌️‍♀️', skill: 15, name: "Javaris Jamar Javarison-Lamar" },
  { teamNumber: 1, emoji: '🏋️‍♂️', skill: 77, name: "D'Pez Poopsie" },
  { teamNumber: 1, emoji: '🏌️‍♂️', skill: 21, name: "D'Jasper Probincrux III" },
  { teamNumber: 1, emoji: '🤾', skill: 5, name: "Leoz Maxwell Jilliumz" },
  { teamNumber: 1, emoji: '🏂', skill: 99, name: "Hingle McCringleberry" },
  { teamNumber: 1, emoji: '🧘‍♀️', skill: 50, name: "L'Carpetron Dookmarriot" },
  { teamNumber: 1, emoji: '🚶‍♀️', skill: 1, name: "Xmus Jaxon Flaxon-Waxon" },
  { teamNumber: 2, emoji: '🏋️‍♀️', skill: 61, name: "Saggitariutt Jefferspin" },
  { teamNumber: 2, emoji: '🤺', skill: 34, name: "Quatro Quatro" },
  { teamNumber: 2, emoji: '🏄', skill: 71, name: "X-Wing @Aliciousness" },
  { teamNumber: 2, emoji: '🧜‍♂️', skill: 76, name: "Bisquiteen Trisket" },
  { teamNumber: 2, emoji: '🤸', skill: 47, name: "Scoish Velociraptor Maloish" },
  { teamNumber: 2, emoji: '⛹️‍♀️', skill: 23, name: "Donkey Teeth" },
  { teamNumber: 2, emoji: '🕴️', skill: 58, name: "T.J. A.J. R.J. Backslashinfourth V" },
  { teamNumber: 2, emoji: '💃', skill: 99, name: "Firstname Lastname" },
  { teamNumber: 2, emoji: '🧍‍♂️', skill: 3, name: "Dan Smith" },
  { teamNumber: 2, emoji: '🐅', skill: 100, name: "Tiger" },
]
function drawTeam1() {
  const team1Container = document.getElementById('team1'); // Grab Where, Team 1 will draw
  let team1Content = ''; // Create empty  container first
  //.. loop through players adding only those on team1
  players.forEach(player => {
    if (1 === player.teamNumber) {
      team1Content += player.emoji;
    }
  });
  team1Container.innerHTML = team1Content;
}
function drawTeam2() {
  const team2Container = document.getElementById('team2'); // Grab Where, Team 1 will draw
  let team2Content = ''; // Create empty  container first
  //.. loop through players adding only those on team1
  players.forEach(player => {
    if (2 === player.teamNumber) {
      team2Content += player.emoji;
    }
  });
  team2Container.innerHTML = team2Content;
}
function draftPlayers() {
  players.forEach(player => {
    let randomNum = Math.ceil(Math.random() * 2);
    player.teamNumber = randomNum;
  });
  drawTeam1();
  drawTeam2();
}
function betTeam1(bet) {
  if (bet > bank) {
    alert(`You don't have the funds to bet $${bet}`);
    return;
  }
  let team1Skill = 0
  let team2Skill = 0

  players.forEach((player) => {
    // add each players skill to the appropriate variable
    if (1 === player.teamNumber) {
      team1Skill += player.skill;
    } else {
      team2Skill += player.skill;
    }
  })

  console.log('⚽ team 1', team1Skill)
  console.log('🏈 team 2', team2Skill)
  //...
  if (team1Skill > team2Skill) {
    bank += bet;
    oPerson.style.display = "block";
    oPerson.style.backgroundImage = "url(ok.png)";
    oComment.innerText = "That was a good bet!";
    oComment.className = "comment-ok";
    popAlert(`won ${bet}`);
  } else {
    bank -= bet;
    oPerson.style.display = "block";
    oPerson.style.backgroundImage = "url(no.png)";
    oComment.innerText = "That was not a good bet!";
    oComment.className = "comment-no";
    popAlert(`lost ${bet}`);
  }
  drawBank();
}
function betTeam2(bet) {
  if (bet > bank) {
    alert(`You don't have the funds to bet $${bet}`);
    return;
  }
  let team1Skill = 0
  let team2Skill = 0

  players.forEach((player) => {
    // add each players skill to the appropriate variable
    if (1 === player.teamNumber) {
      team1Skill += player.skill;
    } else {
      team2Skill += player.skill;
    }
  })

  console.log('⚽ team 1', team1Skill)
  console.log('🏈 team 2', team2Skill)
  //...
  if (team2Skill > team1Skill) {
    bank += bet;
    oPerson.style.display = "block";
    oPerson.style.backgroundImage = "url(ok.png)";
    oComment.innerText = "That was a good bet!";
    oComment.className = "comment-ok";
    popAlert(`won ${bet}`);
  } else {
    bank -= bet;
    oPerson.style.display = "block";
    oPerson.style.backgroundImage = "url(no.png)";
    oComment.innerText = "That was not a good bet!";
    oComment.className = "comment-no";
    popAlert(`lost ${bet}`);
  }
  drawBank();
}
function drawBank() {
  oBank.innerText = bank;
  draftPlayers();
}
function popAlert(str) {
  if (bank <= 0) {
    bank = 0;
    setTimeout(() => {
      let wantToPlayAgain = confirm(`You've gone bust. Game over! Would you like to play again?`);
      if (true === wantToPlayAgain) {
        bank = 100;
        drawBank();
      } else {
        window.close();
      }
    }, 100);
  } else {
    setTimeout(() => {
      alert(`You ${str} bucks`);
    }, 100);
  }
}
function betAll(team) {
  let team1Skill = 0
  let team2Skill = 0

  players.forEach((player) => {
    // add each players skill to the appropriate variable
    if (1 === player.teamNumber) {
      team1Skill += player.skill;
    } else {
      team2Skill += player.skill;
    }
  })

  console.log('⚽ team 1', team1Skill)
  console.log('🏈 team 2', team2Skill)
  //...
  if (1 === team) {
    if (team1Skill > team2Skill) {
      let currentBank = bank;
      bank += bank;
      oPerson.style.display = "block";
      oPerson.style.backgroundImage = "url(ok.png)";
      oComment.innerText = "That was a good bet!";
      oComment.className = "comment-ok";
      popAlert(`won ${currentBank}`);
      drawBank();
    } else {
      bank = 0;
      oPerson.style.display = "block";
      oPerson.style.backgroundImage = "url(no.png)";
      oComment.innerText = "That was not a good bet!";
      oComment.className = "comment-no";
      popAlert('');
      drawBank();
    }
  }else{
    if (team2Skill > team1Skill) {
      let currentBank = bank;
      bank += bank;
      oPerson.style.display = "block";
      oPerson.style.backgroundImage = "url(ok.png)";
      oComment.innerText = "That was a good bet!";
      oComment.className = "comment-ok";
      popAlert(`won ${currentBank}`);
      drawBank();
    } else {
      bank = 0;
      oPerson.style.display = "block";
      oPerson.style.backgroundImage = "url(no.png)";
      oComment.innerText = "That was not a good bet!";
      oComment.className = "comment-no";
      popAlert('');
      drawBank();
    }
  }
}
draftPlayers();
