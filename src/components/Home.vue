<template>
    <div class="northrise-pool-league">

      <section class="hero">
        <div class="hero-text">
          <h1>Welcome to Northrise University Pool League</h1>
          <p>Join the league and compete with other students for glory and prizes</p>
          <router-link to="/Registration" class="btn">Register Now</router-link>
        </div>
      </section>

      <!-- About Us Section -->
      <section class="about">
        <div class="about-content">
          <h1 class="section-heading">About Us</h1>
          <p>Welcome to the Northrise University Pool League! We're a brand new pool league that's just getting started, but we're 
             already making waves in the local community. Our league is made up of talented individuals who are passionate about playing 
             pool and competing against each other. We believe in fostering a fun and casual atmosphere where players can come together
             to improve their skills, make new friends, and have a great time. Whether you're a seasoned pool player or just starting
             out, we welcome you to join us for a season of thrilling matches and friendly competition. So come on in, grab a cue, and
             let's play some pool!
          </p>
        </div>

        <div class="about-links">
              <router-link to="/Rules">
                <div class="blurb-icon"><img src="../assets/images/rules-icon.png" alt="icon" /></div>
                <p>Read Rules</p>
              </router-link>
            <router-link to="/Leaderboards">
              <div class="blurb-icon"><img src="../assets/images/standings-icon.png" alt="icon" /></div>
              <p>See Standings</p>
            </router-link>
            <router-link to="/Rules">
              <div class="blurb-icon"><img src="../assets/images/seasons-icon.png" alt="icon" /></div>
              <p>Check Season</p>
            </router-link>
        </div>
      </section>
  
      <!-- Recent Activity section -->
      <section class="recent">
        <h1 class="section-heading">Recent Activity</h1>
        <div class="container">
          <div class="recent-standings">
            <h2>Top Five Players</h2>
            <table class="recent-standings-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Matches Played</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="player in players" :key="player.id">
                  <td>{{ player["First Name"] }} {{ player["Last Name"] }}</td>
                  <td>{{ player["Matches"]}}</td>
                  <td>{{ player.Points }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="recent-results">
            <h2>Recent Results</h2>
            <ul>
              <li v-for="match in tenMostRecentMatches" :key="match.id">{{ match.player1 }} vs {{ match.player2 }} - <span class="recent-winner">Winner: {{ match.winner }} - {{ match.score }} </span> </li>
            </ul>
          </div>
        </div>
      </section>
  
      <!-- Player profiles section -->
      <section class="profiles">
        <h1 class="section-heading">Meet the Players</h1>
        <p>Get to know the talented individuals who make up our league</p>
        <comp-carousel/>
      </section>
  
      <!-- Recent Activity section -->
      <section class="registration">
        <h1 class="section-heading">Registration</h1>
        <p>If you're interested in participating in the Northrise University Pool League, please visit our <router-link to="/Registration">Registration</router-link> to sign up.</p>
      </section>
    </div>
  </template>
  
  <script>
    import * as firebase from '../javascript/firebase.js';

    import Carousel from './Carousel.vue'

    export default {
      components:{
        "comp-carousel": Carousel
      },
      computed: {
        players() {
          let players = this.$store.state.players;
          return players.sort((a, b) => b.Points - a.Points).slice(0, 5);
        },
      },
      data() {
        return {
          tenMostRecentMatches: [
            { id: 1, player1: 'John', player2: 'Jane', winner: 'Jane', score: '3' },
            { id: 2, player1: 'Mike', player2: 'Kate', winner: 'Mike', score: '4' },
            { id: 3, player1: 'Sarah', player2: 'Tom', winner: 'Sarah', score: '3' },
            { id: 4, player1: 'Alex', player2: 'Emily', winner: 'Alex', score: '4' },
            { id: 5, player1: 'Bob', player2: 'Samantha', winner: 'Samantha', score: '1' },
            { id: 6, player1: 'David', player2: 'Linda', winner: 'David', score: '4' },
            { id: 7, player1: 'Oliver', player2: 'Sophie', winner: 'Sophie', score: '5' },
            { id: 8, player1: 'Daniel', player2: 'Lucy', winner: 'Lucy', score: '5' },
            { id: 9, player1: 'James', player2: 'Emma', winner: 'James', score: '4' },
            { id: 10, player1: 'William', player2: 'Isabella', winner: 'William', score: '2' }
          ], // The ten most recent matches played in the league
          playerProfiles: [] // An array of player profiles, including name, photo, and bio
        }
      },
      created() {
        // Make API calls to fetch data for the standings, recent matches, and player profiles
        // and set the corresponding data properties
        // firebase.addNewDoc();
      }
    }
  </script>
  
  <style scoped>
  *{
    color: #777;
  }

  P{
    font-size: 18px;
    /* font-weight: 600; */
    width: 80%;
    line-height: var(--line-height);
    color: #777;
  }

  .about{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: calc(100vh - var(--header-height));
    /* background-color: #8bab5c; */
  }
  .about-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 75%;
    height: 100%;
  }
  .about-links{
    display: flex;
    flex-direction: column;
    width: 25%;
    height: 100%;
  }
  .about-links a{
    --opacity: 1;
    --color:rgba(255, 255, 255, var(--opacity));

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    width: 100%;
    /* border: 2px solid #8bab5c; */
    background-color: #8bab5c;
    color: var(--color);
  }
    .about-links a:hover {
      background-color: #8bab5cd0;
      --opacity:0.7;
    }
.about-links p{
  font-size: 18px;
  text-align: center;
  color: rgba(255, 255, 255, var(--opacity));
}
  .blurb-icon{
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
  .blurb-icon img{
    /* width: 100%; */
    height: 100%;
    opacity: var(--opacity);
  }

.hero {
  height:calc(100vh - var(--header-height));
  display: flex;
  align-items: center;
  justify-content: center;
}
  .hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("../assets/images/pool-background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: brightness(0.4);
    /* opacity: 0.5;  */
    z-index: -1;
  }
.hero-text {
  /* text-align: center; */
  padding: 20px;
  max-width: 600px;
}
.hero-text h1 {
  font-size: 48px;
  margin-bottom: 20px; 
  color: #8bab5c;
}

.hero-text p {
  font-size: 24px;
  margin-bottom: 40px;
  color: #8bab5c;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #e98824;
  color: #fff;
  border-radius: 5px;
  font-size: 18px;
  text-decoration: none;
  transition: background-color 0.2s;
}

.btn:hover {
  background-color: #f89d19;
}

.profiles{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0 40px 0;
}
.profiles h2{
  margin: 0 0 20px 0;
}
.profiles p{
  text-align: center;
}

.recent{
  padding: 40px 0 20px 0;
  background-color: #f8f8f8;
}
.recent h1{
  width: 100%;
  text-align: center;
}
.recent .container{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.recent .recent-winner{
  color: #8bab5c;
}
.recent-results{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.recent-results li{
  font-size: 23px;
  /* text-align: center; */
  margin: 10px 0 10px 0;
}
.recent-standings{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.recent-standings-table{
  font-size: 18px;
  border-collapse: collapse;
  border: 2px solid #8bab5c;
  border-radius: 50%;
  margin-top: 10px;
}
.recent-standings-table th{
  color: #fff;
}
.recent-standings-table thead{
  background-color: #8bab5c;
}
.recent-standings-table th, td{
  text-align: center;
  padding: 20px;
}

.registration {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  padding: 60px;
  text-align: center;
}
.registration a{
  color:#e98824;
}
  .registration a:hover{
    color: #f89d19;
  }
.registration p {
  font-size: 18px;
  color: #777;
  margin-top: 30px;
}

.section-heading{
  font-size: 36px;
  color: #2b2b2b;
}
</style>       
  