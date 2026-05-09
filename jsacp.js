const leaderboard = [
  { name: "Alice", score: 45 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 88 },
  { name: "David", score: 95 },
  { name: "Eve", score: 70 }
];

// 1. Sort the array based on score (Descending)
// (b - a) gives us highest to lowest
const sortedPlayers = leaderboard.sort((a, b) => b.score - a.score);

// 2. Extract the top 3 players
const topThree = sortedPlayers.slice(0, 3);

// 3. Display the ranking
console.log("--- Top 3 Rankings ---");
topThree.forEach((player, index) => {
  console.log(`${index + 1}. ${player.name}: ${player.score} points`);
});