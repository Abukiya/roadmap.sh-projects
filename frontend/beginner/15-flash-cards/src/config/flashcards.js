const flashcards = [
  {
    id: 1,
    question: "What is a closure in JavaScript?",
    answer: "A function that remembers the variables from the scope where it was created, even after that scope has finished running."
  },
  {
    id: 2,
    question: "What is the difference between let and const?",
    answer: "let allows reassignment; const does not (the binding can't be reassigned)."
  },
  {
    id: 3,
    question: "What does === check that == does not?",
    answer: "=== compares value and type (strict equality), while == allows type coercion."
  },
  {
    id: 4,
    question: "What is the difference between var and let?",
    answer: "var is function-scoped and hoisted (initialized as undefined); let is block-scoped and can't be used before its declaration (temporal dead zone)."
  },
  {
    id: 5,
    question: "What is hoisting?",
    answer: "JavaScript moves declarations to the top of their scope before execution. Function declarations are fully hoisted; var is hoisted as undefined; let and const are hoisted but not initialized."
  },
  {
    id: 6,
    question: "What is a Promise?",
    answer: "An object representing the eventual result of an asynchronous operation. It is either pending, fulfilled (resolved), or rejected."
  },
  {
    id: 7,
    question: "What does async/await do?",
    answer: "It is syntax built on Promises that lets you write asynchronous code in a synchronous-looking style. await pauses the async function until the Promise settles."
  },
  {
    id: 8,
    question: "What is the difference between map() and forEach()?",
    answer: "map() returns a new array with the results of the callback for each element; forEach() returns undefined and is used only for side effects."
  },
  {
    id: 9,
    question: "What is an arrow function and how does it handle 'this'?",
    answer: "A shorter function syntax (() => {}). Arrow functions don't have their own 'this'; they inherit it from the surrounding scope."
  },
  {
    id: 10,
    question: "What is the event loop?",
    answer: "The mechanism that lets JavaScript handle async work on a single thread. It takes tasks from the queues (microtasks first, then macrotasks) and runs them when the call stack is empty."
  }
];

export default flashcards;
