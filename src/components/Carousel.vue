<template>
    <div class="carousel">
        <p class="carousel-button" @click="prev">Prev</p>
        <div class="carousel-slider">
            <ul class='slider'>
                <li v-for="(player, index) in players" :class="index === 0 ? 'show' : ''">
                    <div class="player-card">
                        <img :src="getRandomImage()" alt="Profile Picture">
                        <h1 class="name">{{ player["First Name"] }} {{ player["Last Name"] }}</h1>
                        <div class="player-card-stats">
                            <p>Played <br/>{{ player["Wins"] + player.Loses }}</p>
                            <p>Won <br/> {{ player["Wins"] }}</p>
                            <p>Points <br/>{{ player.Points }}</p>
                        </div>
                        <div class="player-card-button" @click="next">View More</div>
                    </div>
                </li>
            </ul>
        </div>
        <p class="carousel-button" @click="next">Next</p>
    </div>
</template>

<script>
    export default{
        mounted(){
            this.slider = document.querySelector(".slider");
            this.startInterval();
        },
        data(){
            return{
                currentCard: null,
                slider: null,
                interval: null
            }
        },  
        computed:{
            players(){
                return this.$store.state.players
            }
        },
        methods:{
            next(){
                //Check which element currently has the show class
                if(this.currentCard === null) 
                    this.currentCard = document.querySelector(".show"); 

                this.currentCard.classList.remove("show");
                //Check if item has a next sibling
                if(this.currentCard.nextElementSibling === null){
                    this.currentCard = this.slider.firstElementChild;
                    this.currentCard.classList.add("show");
                    this.startInterval()
                    return;
                }
                
                //Make the next sibling the current card.
                this.currentCard = this.currentCard.nextElementSibling;
                this.currentCard.classList.add("show");
                this.startInterval()
            },
            prev(){
                //Check which element currently has the show class
                if(this.currentCard === null) 
                    this.currentCard = document.querySelector(".show"); 

                this.currentCard.classList.remove("show");
                //Check if item has a next sibling
                if(this.currentCard.previousElementSibling === null){
                    this.currentCard = this.slider.lastElementChild;
                    this.currentCard.classList.add("show");
                    this.startInterval()
                    return;
                }
                
                //Make the next sibling the current card.
                this.currentCard = this.currentCard.previousElementSibling ;
                this.currentCard.classList.add("show");
                this.startInterval()
            },
            getRandomImage() {
                const randomNumber = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
                return `https://source.unsplash.com/featured/200x200/?face&${randomNumber}`;
            },
            startInterval(){
                if(this.interval !== null)
                    clearInterval(this.interval);

                this.interval = setInterval(() => {
                    if(this.slider.childElementCount > 0)
                    this.next()
                }, 10000);
            }
        }
    }
</script>

<style scoped>
li{
    min-width: 0;
    max-width: 0;
    min-height: 0;
    max-height: 0;
    opacity: 0;
    transition: opacity 1s ease-in-out,  
                min-width 0s ease 1s,
                min-height  0s ease 1s;
}
li.show{
    min-width: 100%;
    min-height: 100%;
    opacity: 1;
    transition: opacity 1s ease-in-out 1s,
                min-width 0s ease 1s,
                min-height  0s ease 1s;
}
.carousel{
    display: flex;
    flex-direction: row;
    align-items:center;
}
.carousel .slider{
    display: flex;
    flex-direction: row;
    height: 100%;
    /* transform: translateX(-700px); */
}
.carousel-button{
    font-size: 20px;
    font-weight: 600;
    margin: 0 50px;
    color: #e98824;
    cursor: pointer;
}
    .carousel-button:hover{
        color: #8bab5c;
    }
    .carousel-button:active{
        opacity: 0.7;
    }
.carousel-slider{
    --sliderSize: 400px;

    width: var(--sliderSize);
    height: var(--sliderSize);
    /* overflow: hidden; */
}

.player-card{
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    font-size: 20px;
    width: var(--sliderSize);
    height:100%;
    box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.15);
    background-color:ffffff;
    color: #e98824;
}
.player-card-button{
    font-size: 18px;
    margin-top: 10px;
    padding:8px;
    border: none;
    background-color: transparent;
    color: #8bab5c;
    cursor: pointer;
}
    .player-card-button:hover{
        background-color: #8bab5c;
        color: white;
    }
    .player-card-button:active{
        opacity: 0.7;
    }
.player-card img{
    --cardHeight: 180px;

    width: var(--cardHeight);
    height: var(--cardHeight);
    object-fit: cover;
    border-radius:20px;
}
.player-card h1{
    font-size: 32px;
}
.player-card-stats{
    display: flex;
    flex-direction: row;
}
.player-card-stats p{
    font-size: 25px;
    margin: 5px 20px;
    text-align: center;
    opacity: 0.8;
}
</style>