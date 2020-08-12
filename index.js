import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working')

// ⚽️ M  V P ⚽️ //

// Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

const matchesOf2014 = fifaData.filter(match => match.Year === 2014);
const lastMatchOf2014 = matchesOf2014.find(match => match.Stage === "Final")

//OR

let findGermany = fifaData.find(findHomeTeam)

function findHomeTeam(x) {
    let y = x["Year"]
    let z = x["Stage"]

    if (y === 2014 && z === "Final") {
        return x
    }
}

console.log(findGermany["Home Team Name"])

//(a) Home Team name for 2014 world cup final
console.log("Task 1a -----> " + lastMatchOf2014["Home Team Name"])

//(b) Away Team name for 2014 world cup final
console.log("Task 1b -----> " + lastMatchOf2014["Away Team Name"])

//(c) Home Team goals for 2014 world cup final
console.log("Task 1c -----> " + lastMatchOf2014["Home Team Goals"])


//(d) Away Team goals for 2014 world cup final
console.log("Task 1d -----> " + lastMatchOf2014["Away Team Goals"])

//(e) Winner of 2014 world cup final */
function getWinnerName(game) {
    if (game["Home Team Goals"] > game["Away Team Goals"]) {
        return game["Home Team Name"]
    } else {
        return game["Away Team Name"]
    }
}

const winningTeam = getWinnerName(lastMatchOf2014)
console.log(winningTeam)



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

let finalsData = fifaData.filter(getFinals)

function getFinals(x) {
    let y = x["Stage"]
    if (y === "Final") {
        return x
    }
}
console.log(finalsData)

//OR

function getFinals(match) {
    return match["Stage"] === "Final";
}
const finalsData = fifaData.filter(getFinals);


console.log(finalsData)

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, 
and returns an array called `years` containing all of the years in the dataset */

function getYears(x, callback) {
    let years = []

    for (let i = 0; i < x.length; i++) {

        let finalData = callback(x[i])
        if (finalData) {
            // console.log(finalData["Year"])
            years.push(finalData["Year"])
        }
    }

    return years
}

let finalYears = getYears(fifaData, getFinals)
console.log(finalYears);

//OR

function getYears(getFinals) {
    const finalGames = fifaData.filter(getFinals)
    return finalGames.map(game => game.Year)
}

const years = getYears(getFinals)
console.log(years)

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` 
and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(getFinals) {
    const finalGames = fifaData.filter(getFinals)
    return finalGames.map(getWinnerName)
}

const winners = getWinners(getFinals)
console.log('The winning teams of the finals were,', winners)

// Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

function getWinnersByYear(listOfWinningCountries, listOfYears) {

    let winningArray = [];

    for (let i = 0; i < listOfWinningCountries.length; i++) {
        winningArray.push(listOfYears[i], listOfWinningCountries[i]);
        console.log(`In ${winningArray[0]}, ${winningArray[1]} won the world cup!`);
        winningArray = [];
    }

};

getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData)));
console.log("");


// Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const match = data.length;

    let avgHomeGoals = Math.round(data.reduce((accumulator, index) => accumulator + index["Home Team Goals"], 0) / match);

    let avgAwayGoals = Math.round(data.reduce((accumulator, index) => accumulator + index["Away Team Goals"], 0) / match);

    const returnInfo = `Average Home Goals ${avgHomeGoals} - Average Away Goals ${avgAwayGoals}`;

    return returnInfo;
};
console.log("Task 6 ------>")
console.log(getAverageGoals(fifaData));



/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your choosing as listed in the README file. */
