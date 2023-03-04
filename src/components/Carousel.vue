<template>
    <div class="carousel">
        <p class="carousel-button next" @click="prev">Prev</p>
        <div class="carousel-slider" ref="carousel-slider">
            <ul class='slider'>
                <li data-current-card="" v-for="(player, index) in players">
                    <div class="player-card">
                        <img :src="getRandomImage()" alt="Profile Picture">
                        <p>Name: {{ player.name }}</p>
                        <p>Wins: {{ player.Wins }}</p>
                        <p>Points {{ player.Points }}</p>
                        <div class="player-card-button" @click="next">View More</div>
                    </div>
                </li>
            </ul>
        </div>
        <p class="carousel-button prev" @click="next">Next</p>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                players:[
                    {name: "Jane", Wins: 3, Points: 88},
                    {name: "John", Wins: 44, Points: 67},
                    {name: "Jack", Wins: 45, Points: 88},
                    {name: "Jade", Wins: 67, Points: 99},
                ],
                currentCard:"",
                slider:"", 
                translation: 0
            }
        },
        mounted(){
            this.slider = document.querySelector(".slider");
            this.currentCard = this.slider.firstElementChild;
            this.currentCard.setAttribute("data-current-card", "this");
            setInterval(() => {this.next()}, 10000);
        },
        methods:{
            next(){
                //Check if item has a next sibling
                if(this.currentCard.nextElementSibling === null){
                    this.slider.firstElementChild.setAttribute("data-current-card", "this");
                    this.currentCard.setAttribute("data-current-card", "");
                    this.currentCard = this.slider.firstElementChild;
                    return;
                }
                
                //Make the next sibling the current card.
                this.currentCard.nextSibling.setAttribute("data-current-card", "this");
                this.currentCard.setAttribute("data-current-card", "");
                this.currentCard = this.currentCard.nextSibling;
            },
            prev(){
                //Check if item has a next sibling
                if(this.currentCard.previousElementSibling === null){
                    this.slider.lastElementChild.setAttribute("data-current-card", "this");
                    this.currentCard.setAttribute("data-current-card", "");
                    this.currentCard = this.slider.lastElementChild;
                    return;
                }
                
                //Make the next sibling the current card.
                this.currentCard.previousSibling .setAttribute("data-current-card", "this");
                this.currentCard.setAttribute("data-current-card", "");
                this.currentCard = this.currentCard.previousSibling ;
            },
            getRandomImage() {
                const randomNumber = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
                return `https://source.unsplash.com/featured/200x200/?face&${randomNumber}`;
            }
        }
    }
</script>

<style>
li[data-current-card=""]{
    display:none;
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
.player-card p{
    margin: 5px 0;
}
</style>