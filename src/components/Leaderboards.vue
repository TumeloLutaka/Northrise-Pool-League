<template>
    <div>
      <h1>Northrise University Pool League Leaderboards</h1>
      <table class="leaderboard-table">
        <thead>
          <tr>
            <th>Pos</th>
            <th>Player</th>
            <th>Matches Played</th>
            <th>Matches Won</th>
            <th>Matches Lost</th>
            <th>Debut Matches Played</th>
            <th>DM Won</th>
            <th>DM Lost</th>
            <th>Total Matches</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(player, index) in leaderboard" :key="index">
            <td>{{ player.pos }}</td>
            <td>{{ player.player }}</td>
            <td>{{ player.matchesPlayed }}</td>
            <td>{{ player.matchesWon }}</td>
            <td>{{ player.matchesLost }}</td>
            <td>{{ player.debutMatchesPlayed }}</td>
            <td>{{ player.dmWon }}</td>
            <td>{{ player.dmLost }}</td>
            <td>{{ player.totalMatches }}</td>
            <td>{{ player.points }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
    
<script>
export default {
  data() {
    return {
      leaderboard: [
        {
          pos: 1,
          player: 'John Doe',
          matchesPlayed: 6,
          matchesWon: 4,
          matchesLost: 2,
          debutMatchesPlayed: 2,
          dmWon: 1,
          dmLost: 1,
          totalMatches: 8,
          points: 8,
        },
        {
          pos: 1,
          player: 'Jane Doe',
          matchesPlayed: 6,
          matchesWon: 4,
          matchesLost: 2,
          debutMatchesPlayed: 2,
          dmWon: 1,
          dmLost: 1,
          totalMatches: 8,
          points: 8,
        },
        {
          pos: 1,
          player: 'Tumelo Lutaka',
          matchesPlayed: 6,
          matchesWon: 4,
          matchesLost: 2,
          debutMatchesPlayed: 2,
          dmWon: 1,
          dmLost: 1,
          totalMatches: 8,
          points: 8,
        },
        // Add more objects for each player in the league
      ],
    };
  },
};
</script>

<style>
.leaderboard-table {
  border-collapse: collapse;
  width: 100%;
}

.leaderboard-table th,
.leaderboard-table td {
  padding: 8px;
  text-align: center;
}

.leaderboard-table th {
  background-color: #e98824;
  color: #fff;
}

.leaderboard-table tr:nth-child(even) {
  background-color: #8bab5c;
}

.leaderboard-table tr:nth-child(odd) {
  background-color: #8d191c;
}

.leaderboard-table tr:hover {
  background-color: #d0d0d0;
}
</style>
