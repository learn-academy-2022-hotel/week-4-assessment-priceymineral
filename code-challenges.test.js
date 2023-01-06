// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// TEST PSEUDO
// describe - name function that will perform the requirements
// it - provide a description of the functionality
// expect - perform the evaluation 
// check for the "good error" in terminal

describe("removeFirstAndShuffle", () => {
  const expected1 = ["blue", "green", "yellow", "pink"]
  const expected2 = [
    "indigo",
    "periwinkle",
    "ochre",
    "aquamarine",
    "saffron"
  ]
  it("removes the first item in the array and shuffles the rest", () => {
    expect(removeFirstAndShuffle(colors1)).toEqual(expect.arrayContaining(expected1))
    expect(removeFirstAndShuffle(colors2)).toEqual(expect.arrayContaining(expected2))
  })
})

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

// FXN PSEUDO
// initialize removeFirstAndShuffle fxn which takes one (array) argument
  // remove the first element of the input array (shift?)
  // shuffle the new (modified) array
  // return the array
const removeFirstAndShuffle = (array) => {
  array.shift()
  let shuffledArray = shuffle(array)

  return shuffledArray
}

const shuffle = (array) => {
  for (let i = array.length - 1; i> 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j];
    array[j] = temp;
    // [array[i], array[j]] = [array[j], array[i]] // ReferenceError: Cannot access 'j' before initialization
  }

  return array
}


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

// TEST PSEUDO
// describe - name the function that performs the requirements
// it - describe the functionality
// expect - call the function and compare actual output to expected
// check for "good" error

describe("voteTally", () => {
  it("counts votes and returns the current tally", () => {
    expect(voteTally(votes1)).toEqual(11)
    expect(voteTally(votes2)).toEqual(-31)
  })
})

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.

// FXN PSEUDO
// initialize fxn voteTally which takes one (object) argument
// access the upVotes and assign to a variable
// access the downVotes and assign to a variable
// subtract downVotes from upVotes and assign to a variable
// return the result variable

const voteTally = (object) => {
  let dVotes = object.downVotes
  let uVotes = object.upVotes
  let tally = uVotes-dVotes

  return tally
}


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.
