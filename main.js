

// List of months and seasons.
const time = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "Novemeber", "December", "winter", "spring", "summer", "autumn"];

// List of frequencies.
const frequency = ["always", "almost always", "constantly", "usually", "sometimes", "almost never", "never"];

// List of weather conditions.
const weather = ["sunny", "raining", "misty", "snowing", "cloudly", "stormy", "hot", "mild", "cold", "freezing"];

// Get a random time of year.
const getTimeOfYear = input => input.at(Math.floor(Math.random() * input.length));

// Get a random frequeny of time.
const getFrequency = freq => freq.at(Math.floor(Math.random() * freq.length)); 

// Get random weather.
const getWeather = weath => weath.at(Math.floor(Math.random() * weath.length));

// console.log(getTimeOfYear(time));
// console.log(getFrequency(frequency));
// console.log(getWeather(weather));

// Create a sentance using the three random words.
const sentance = (time, freq, weath) => {
    console.log(`In ${time} it is ${freq} ${weath}.`);
};

sentance(getTimeOfYear(time), getFrequency(frequency), getWeather(weather));