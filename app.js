// // Declare variables
// let country = 'pakistan'; 
// let continent = 'Asia';  
// let population = 100; 

// // Log their values to the console
// console.log('Country:', country);
// console.log('Continent:', continent);
// console.log('Population:', population + ' million');

// Declare variables
// let isIsland = false; 
// let language; 

// // Log the types to the console
// console.log('Type of isIsland:', typeof isIsland);
// console.log('Type of population:', typeof population);
// console.log('Type of country:', typeof country);
// console.log('Type of language:', typeof language);

// Set the value of 'language'
// language = 'English'; 

// // Identify const variables
// const country = 'YourCountry'; 
// const continent = 'YourContinent'; 
// const population = 100; 
// const isIsland = false; 

// // Log the types to the console
// console.log('Type of isIsland:', typeof isIsland);
// console.log('Type of population:', typeof population);
// console.log('Type of country:', typeof country);
// console.log('Type of language:', typeof language);

// Attempt to change a const variable (this will result in an error)
// Uncomment the following line to observe the error
// country = 'NewCountry'; 

// // 1. If your country split in half, and each half would contain half the population,
// // then how many people would live in each half?
// let halfPopulation = population / 2;
// console.log('Population in each half:', halfPopulation + ' million');

// // 2. Increase the population of your country by 1 and log the result to the console
// population += 1;
// console.log('Increased population:', population + ' million');

// // 3. Finland has a population of 6 million. Does your country have more people than Finland?
// let finlandPopulation = 6; // Finland's population
// let morePeopleThanFinland = population > finlandPopulation;
// console.log('Does your country have more people than Finland?', morePeopleThanFinland);

// // 4. The average population of a country is 33 million people. Does your country have less people than the average country?
// let averagePopulation = 33; // Average population of a country
// let lessPeopleThanAverage = population < averagePopulation;
// console.log('Does your country have less people than the average country?', lessPeopleThanAverage); 

// // 5. Based on the variables you created, create a new variable 'description'
// // which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak Portuguese'
// let description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
// console.log('Description:', description);


// Recreate the 'description' variable using template literals
// let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
// console.log('Description:', description);

// // If/else statements based on population
// let averagePopulation = 33;

// if (population > averagePopulation) {
//     console.log(`${country}'s population is above average`);
// } else {
//     let belowAverage = averagePopulation - population;
//     console.log(`${country}'s population is ${belowAverage} million below average`);
// }

// // Change the population temporarily to 13
// population = 13;

// // Re-run the if/else statements
// if (population > averagePopulation) {
//     console.log(`${country}'s population is above average`);
// } else {
//     let belowAverage = averagePopulation - population;
//     console.log(`${country}'s population is ${belowAverage} million below average`);
// }

// // Change the population temporarily to 130
// population = 130;

// // Re-run the if/else statements
// if (population > averagePopulation) {
//     console.log(`${country}'s population is above average`);
// } else {
//     let belowAverage = averagePopulation - population;
//     console.log(`${country}'s population is ${belowAverage} million below average`);
// }

// // Set the population back to the original value
// population = 100;

// // Predictions
// console.log('Prediction 1:', '9' - '5');          // Result: 4
// console.log('Prediction 2:', '19' - '13' + '17'); // Result: "617"
// console.log('Prediction 3:', '19' - '13' + 17);   // Result: 23
// console.log('Prediction 4:', '123' < 57);          // Result: false
// console.log('Prediction 5:', 5 + 6 + '4' + 9 - 4 - 2); // Result: 1143

// // Executions
// console.log('Execution 1:', '9' - '5');          // Result: 4
// console.log('Execution 2:', '19' - '13' + '17'); // Result: "617" (string concatenation)
// console.log('Execution 3:', '19' - '13' + 17);   // Result: 23
// console.log('Execution 4:', '123' < 57);          // Result: false (string comparison)
// console.log('Execution 5:', 5 + 6 + '4' + 9 - 4 - 2); // Result: 1143 (string concatenation)