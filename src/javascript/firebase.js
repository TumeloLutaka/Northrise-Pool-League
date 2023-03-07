// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore, collection, onSnapshot, 
    addDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUd2_Gq7XpGYqKhu7NG2CQqRM3Zq79K0s",
  authDomain: "northrise-pool-league.firebaseapp.com",
  projectId: "northrise-pool-league",
  storageBucket: "northrise-pool-league.appspot.com",
  messagingSenderId: "411345841593",
  appId: "1:411345841593:web:25f0ed66dd02c400039a68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Init service
const db = getFirestore()

// collection ref
const colRef = collection(db, 'player')

//get collection data
export async function FetchPlayers (){
     const data = await getDocs(colRef)
    .then((snapshot => {
        let players = [];
        snapshot.docs.forEach((player) => {
            players.push({...player.data(), id: player.id})
        })
        // console.log(players);
        return players;
    }))
    .catch(err => {
        console.log(err);
    })

    return data;

}
import store from './store.js';
onSnapshot(colRef, (snapshot) => {
    let players = [];
    snapshot.docs.forEach((player) => {
        players.push({...player.data(), id: player.id})
    })
    // console.log(players);
    store.commit('SetPlayers', players);
})
export function AddPlayer(playerObj){
    // alert("Working");
    addDoc(colRef, playerObj)
}


