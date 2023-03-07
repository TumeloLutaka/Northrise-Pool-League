<template>
    <section class="leaderboard">
      <h1 style="color:var(--col-grey-header)">Northrise University Pool League Leaderboards</h1>
      <table class="leaderboard-table">
        <thead>
          <tr>
            <th>  <!-- Pos --> </th>
            <th style="text-align: left;">Player</th>
            <th>MP</th>
            <th>MW</th>
            <th>ML</th>
            <th>DMP</th>
            <th>DMW</th>
            <th>DML</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(player, index) in players" :key="index">
            <td>{{ index + 1 }}</td>
            <td style="text-align: left;">{{ player["First Name"]}} {{ player["Last Name"]}}</td>
            <td>{{ player["Wins"] + player["Loses"]}}</td>
            <td>{{ player["Wins"] }}</td>
            <td>{{ player["Loses"] }}</td>
            <td>{{ player["Debut Wins"] + player["Debut Loses"] }} </td>
            <td>{{ player["Debut Wins"] }}</td>
            <td>{{ player["Debut Loses"] }}</td>
            <td>{{ player["Points"]}}</td>
          </tr>
        </tbody>
      </table>

      <div class="leaderboard-table-legend">
          <p>MP  - Matches Played</p>
          <p>MW  - Matches Won</p>
          <p>ML  - Matches Lost</p>
          <p>DMP - Debut Matches Played</p>
          <p>DMW - Debut Matches Won</p>
          <p>DML - Debut Matches Lost</p>
          <p>Pts - Points</p>
        </div>
    </section>
  </template>
    
<script>
export default {
  computed: {
    players() {
      let players = this.$store.state.players;
      return players.sort((a, b) => b.Points - a.Points);
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
.leaderboard-table-legend{
  font-size: 18px;
  /* padding: 20px; */
}
.leaderboard-table-legend p{
  margin: 10px 0;
  /* padding: 20px; */
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
  /* text-align: left; */
  background-color: var(--col-green-nu);
  color: var(--col-white-main);
}
.leaderboard-table th, 
.leaderboard-table td{
  padding: 12px 0px;
}
.leaderboard-table tbody {
  text-align: center;
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
