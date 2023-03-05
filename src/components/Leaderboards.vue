<template>
    <section class="leaderboard">
      <h1>Northrise University Pool League Leaderboards</h1>
      <table class="leaderboard-table">
        <thead>
          <tr>
            <th>  <!-- Pos --> </th>
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
          <tr v-for="(player, index) in players" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{player["First Name"]}} {{ player["Last Name"]}}</td>
            <td>{{ player.matchesPlayed }}</td>
            <td>{{ player.matchesWon }}</td>
            <td>{{ player.matchesLost }}</td>
            <td>{{ player.debutMatchesPlayed }}</td>
            <td>{{ player.dmWon }}</td>
            <td>{{ player.dmLost }}</td>
            <td>{{ player.totalMatches }}</td>
            <td>{{ 5}}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </template>
    
<script>
export default {
  computed: {
    players() {
      return this.$store.state.players;
    },
  }
};
</script>

<style>
.leaderboard{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0; 
}

.leaderboard-table{
  font-size: 15px;
  min-width: 400px;
  width: 90%;
  margin: 25px 0;
  border-collapse: collapse;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.leaderboard-table thead tr{
  font-weight: 600;
  text-align: left;
  background-color: var(--col-green-nu);
  color: var(--col-white-main);
}

.leaderboard-table th, 
.leaderboard-table td{
  padding: 12px 15px;
}
.leaderboard-table tbody tr{
  border-bottom: 1px solid var(--col-grey-text);
}
.leaderboard-table tbody tr:nth-of-type(even){
  background-color: var(--col-grey-background);
}
.leaderboard-table tbody tr:last-of-type{
  border-bottom: 2px solid var(--col-green-nu);
}
.leaderboard-table tbody tr:hover{
  font-weight: bold;
  color: var(--col-green-nu);
}

</style>
