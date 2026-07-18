const footballTeam = {
  team: "Blue Warriors",
  year: 2026,
  headCoach: "Alex Morgan",
  players: [
    {
      name: "Liam Carter",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Noah Williams",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Ethan Brown",
      position: "midfielder",
      isCaptain: true
    },
    {
      name: "Lucas Davis",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "James Wilson",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Oliver Smith",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Daniel Miller",
      position: "goalkeeper",
      isCaptain: false
    }
  ]
};

// Select HTML elements
const team = document.getElementById("team");
const year = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdown = document.getElementById("players");

// Display team information
team.textContent = footballTeam.team;
year.textContent = footballTeam.year;
headCoach.textContent = footballTeam.headCoach;

// Function to display players
const displayPlayers = (players) => {
  playerCards.innerHTML = players
    .map((player) => {
      return `
        <div class="player-card">
          <h2>${player.isCaptain ? "(Captain) " : ""}${player.name}</h2>
          <p>Position: ${player.position}</p>
        </div>
      `;
    })
    .join("");
};

// Display all players initially
displayPlayers(footballTeam.players);

// Filter players when dropdown changes
playersDropdown.addEventListener("change", (event) => {
  const selectedPosition = event.target.value;

  if (selectedPosition === "all") {
    displayPlayers(footballTeam.players);
  } else {
    const filteredPlayers = footballTeam.players.filter(
      (player) => player.position === selectedPosition
    );

    displayPlayers(filteredPlayers);
  }
});