import Vuex from 'vuex'
import { FetchPlayers } from './firebase.js'

const store = new Vuex.Store({
    state: {
        players: []
    },
    mutations: {
        SetPlayers(state, players){
            state.players = players;
            console.log(state.players[0]);
        }
    },
    actions: {
        async FetchPlayers(context) {
            const players = await FetchPlayers();
            
            console.log(players);
            context.commit('SetPlayers', players);
        }
    },
    getters: {
      getCount: state => {
        return state.count;
      }
    }
  });
  

export default store;