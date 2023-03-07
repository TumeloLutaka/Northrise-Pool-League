import Vuex from 'vuex'
import { FetchPlayers } from './firebase.js'

const store = new Vuex.Store({
    state: {
        players: []
    },
    mutations: {
        SetPlayers(state, players){
            state.players = players;
        }
    },
    actions: {
        // async FetchPlayers(context) {
        //     const players = await FetchPlayers();
            
        //     console.log(players);
        //     context.commit('SetPlayers', players);
        // }
    },
    getters: {
      GetTopFive(state) {
        //Sort all the players in the array.
        let sortedPlayers = state.players.sort((a, b) => a.points - b.points)

        //returning the five players
        return sortedPlayers.slice(0, 5);
      }
    }
  });
  

export default store;