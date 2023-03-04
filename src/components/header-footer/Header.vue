<template>
    <div class="header">
        <div class="content">
            <h1>Northrise Pool League</h1>
            <nav class="navigation">
                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/Leaderboards">Leaderboards</router-link></li>
                    <li><router-link to="/Rules">Rules</router-link></li>
                </ul>
            </nav>
        </div>
    </div>
    <div class="header-padding"></div>
</template>

<style scoped>
.content{
    width: fit-content;
    height: fit-content;
}
.header{
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: var(--header-height);
    box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.05);
    background-color: white;
    z-index: 999;
}
.header-padding{
    height: var(--header-height);
}
.navigation ul{
    display: flex;
    flex-direction:row;
    justify-content:space-around;
}

.navigation ul li{
    margin: 0 5px 0 5px;
}
a {
    color: #e98824;
    font-weight: 600;
}
.router-link-active {
  color: #e98824;
}
.router-link-active:after {
  content: "";
  display: block;
  height: 2px;
  background-color: #e98824;
}
</style>