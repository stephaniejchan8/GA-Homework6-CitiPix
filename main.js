// Get DOM object city-form ID, which is on the form element


  // True form submissions go to a backend service, but we want to handle things in the front-end. How can we do this?

  // Get the text input fields values with .value on the input - but how exactly?

  // You always want to scan and clean data when you get it from the browser, think about .trim and .toLowerCase - this will make your conditional detection more consistent


// This about conditional logic. We want to check through each possible input a user gives us to make this work properly. Think about conditional statements, going through the list of possible city options.

// If a user gives us 'Austin' versus 'austin' - how can we make those point to the same background? 

// We know we want to change the background on the page by switching classes. But how do we replace one class with another using JS???

// PSUEDO CODE
// 1. Obtain user text input value in a variable userInput
// 2. apply trim and lowercase to userInput
// 3. Compare userInput to list of cities
// 4. If there is a match, update background-image of body to city - can you apply a class to the body?

// Declare JS variables for DOM elements
let userInput;
const submitBtn = document.querySelector('#submit-btn');

// Create click event listener for submit button
submitBtn.addEventListener('click', obtainInput);

// Create function to compare user input to list of cities, update background image if there is a match 
function obtainInput(e) {
  e.preventDefault(); // prevent form actions as this is front end only website
  // Obtain user input into variable
  userInput = document.querySelector('#city-type').value;

  // Scan and clean userInput by removing white spaces and convert to lower case
  userInput = userInput.trim();
  userInput = userInput.toLowerCase();

  //  Conditional statement to compare userInput to list of cities
  // if (userInput === "nyc" || userInput === "new york city") {
  //   document.body.setAttribute('class', 'nyc');
  // } else if (userInput === "san francisco") {
  //   document.body.setAttribute('class', 'sf');
  // } else if (userInput === "la" || userInput === "los angeles") {
  //   document.body.setAttribute('class', 'la');
  // } else if (userInput === 'austin') {
  //   document.body.setAttribute('class', 'austin');
  // } else if (userInput === 'sydney') {
  //   document.body.setAttribute('class', 'sydney');
  // } else {
  //   document.body.removeAttribute('class');
  //   alert('City picture not found in database');
  // }

  // Switch version of conditional statement to compare userInput to list of cities
  switch (userInput) {
    case "nyc":
    case "new york city":
      document.body.setAttribute('class', 'nyc');
      break;
    case "sf":
    case "san francisco":
      document.body.setAttribute('class', 'sf');
      break;
    case "la":
    case "los angeles":
      document.body.setAttribute('class', 'la');
      break;
    case "austin":
      document.body.setAttribute('class', 'austin');
      break;
    case "sydney":
      document.body.setAttribute('class', 'sydney');
      break;
    default:
      document.body.removeAttribute('class');
      alert('City picture not found in database');
  }
}

