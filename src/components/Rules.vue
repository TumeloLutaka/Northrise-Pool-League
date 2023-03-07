<template>
    <section class="rules">
        <h1 class="rules-title">Rules</h1>
        <ol class="rules-list" start="1" type="1">
            <li>
                <p>
                    The Northrise Pool League is a monthly league. Each season takes place during
                    the course of one month with the winner of each season being declared at the
                    end of the season.
                </p>
            </li>
            <li>

            </li>
            <li>
                <p>
                    A winner of the season is determined by calculating the player with the highest
                    accumulated points.
                </p>
            </li>
            <li>
                <p>
                    There are two ways to gains points in the league: Debut Matches and Wagering
                    Matches.
                </p>
            </li>
            <li>
                <p>
                    A Debut Match refers to the first match played between two opponents who have
                    yet to face each other during the current season. The winner of a Debut Match
                    will earn one point, and thereafter, they will no longer be able to earn additional
                    points by playing the same opponent unless through a wager.
                </p>
            </li>
            <li>
                <p>
                    A Wagering Match is a match between two opponents who have decided to wager
                    an agreeded upon number of points against each other with the winner taking
                    all the points that have been wagered.
                </p>
            </li>
        </ol>
    </section>
  </template>
  
  <style scoped>
.rules{
    padding: 40px 100px;
}
.rules-list{
    margin: 10px 0 0 0;
    counter-reset: list-counter;
}

.rules-list li p::before {
  content: counter(list-counter) ". ";
  counter-increment: list-counter;
  font-weight: bold;
  margin-right: 5px;
}
.rules-list li p{
    font-size: 18px;
    line-height: calc(var(--line-height) / 1.5);
    margin-bottom: 10px;
    color: var(--col-grey-text);
}
.rules-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
    color: var(--col-grey-header);
}
  </style>
  