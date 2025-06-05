// const country = 'England';
// const continent = 'United Kingdom';
// const isIsland = true;
// let population = 10;
// let language = "English";

const { enabled } = require("express/lib/application");

// // console.log(country, continent, population);


// console.log("Type of ", typeof(country));
// console.log("Type of ", typeof(continent));
// console.log("Type of ", typeof(population));
// console.log("Type of ", typeof(isIsland));
// console.log("Type of ", typeof(language));

// console.log("Population divided by 2", population / 2);

// population++;

// console.log("Updated Population", population);
// console.log(population > 6);
// console.log(population < 33);
// console.log("String per last request in Basic Operators", `'${country} was in Europe, and its ${population} people speak ${language}'`);

// if (population > 33) {
//     console.log(`${country}'s population is above average.`);
// } else {
//     console.log(`${country}'s population is ${33 - population} million below average.`);
// }

// // Type Coercion and Conversion needs more understanding
// console.log('9' - '5'); // -> 95
// console.log('19' - '13' + '17'); // -> undefined
// console.log('19' - '13' + 17); // -> undefined
// console.log('123' < 57); // -> undefined
// console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 121

// // const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// // if (numNeighbours ===1 1) {
// //     console.log("Only 1 border!");
// // } else if (numNeighbours > 1) {
// //     console.log("More than 1 border");
// // } else {
// //     console.log("No borders");
// // }

// if (language == "English" && population < 50000000 && isIsland == true) {
//     console.log(`You should live in ${country}.`);
// } else {
//     console.log("England does not meet your criteria.");
// }

// switch(language) {
//     case language = 'Chinese':
//     case language = 'Mandarin':
//         console.log('MOST number of native speakers!');
//       break;
//     case language = 'English':
//         console.log('2nd place in number of native speakers.');
//       break;
//     case language = 'Spanish':
//         console.log('3rd place');
//       break;
//     case language = 'Hindi':
//         console.log('Number 4');
//       break;
//     case language = 'Arabic':
//         console.log('5th most spoken language');
//       break;
//     default:
//         console.log('Great language too :D');
//   }

  
//   console.log(`${country}'s ${population > 300 ? "population is above" :  "population is below"} average.`);
  
//  console.log(
//    `${country}'s population is ${population > 300 ? 'above' : 'below'} average`
//  );

// const thisYear = 2025;

// const ageJulian = thisYear - 1991; // Age calculation
// console.log(ageJulian);





    // let day = 'wednesday'

    // if (day === "monday") {
    //     console.log('Plan course structure');
    //     console.log('Go to coding meetup');
    // } else if (day === "tuesday") {
    //     console.log('Prepare theory videos');
    // } else if (day === "wednesday" || day === 'thursday') {
    //     console.log('Write code examples');
    // } else if (day === "friday") {
    //     console.log('Record videos');
    // } else if (day === "saturday" || day === 'sunday') {
    //     console.log('Enjoy the weekend :D');
    // } else {
    //     console.log('Not a valid day');
    // }

    // const bill = 275;
    // let tip;
    // /* Write your code below. Good luck! 🙂 */
    
    // const tipCalc = bill >= 50 && bill <= 300 ? tip = bill * 0.15 : tip = bill * 0.20;
    
    // console.log(`The bill was ${bill}, the tip was ${tip}, and the total cost ${bill + tip}.`)

    // const years = [1990, 1967, 2002, 2010, 2018];

    // function calcAge( birthYear ) {
    //     return 2025 - birthYear
    // };

    // let ages = years.map(year => {
    //     return calcAge(year)
    // });

    // console.log(ages);

    // const myFriends = ['Michael', 'Steven', 'Matt'];

    // let logged = myFriends.unshift('Nick');
    // let logged2 = myFriends.push('Larry');

    // console.log(myFriends[myFriends.length - 1]);
    // console.log(logged);
    // console.log(myFriends);

    let jonas = {
        age: 35,
        firstName: 'Jonas',
        lastName: 'Schmedtmann',
        friends: ["Michael", "Peter", "Steven"],
        birthYear: 1991,
        job: 'Teacher',
        location: 'Portugal',
        twitter: false,

        getAge: function () {
            this.age = 2025 - this.birthYear;
            return this.age;
        },

        getSummary: function () {
            return `${this.firstName} ${this.lastName} is a ${this.getAge()} year old person, they have ${this.friends.length} friends called: ${this.friends[0]}, ${this.friends[1]} and ${this.friends[2]}. Their job is a ${this.job}. They work and live in ${this.location} and ${this.twitter ? 'have twitter' : "don't have twitter"}.`;
        }
    }

    console.log(jonas.getSummary());

    // let outPutSentence = `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`

    // console.log(outPutSentence);