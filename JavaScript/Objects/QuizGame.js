const questions = [];

const Q1 = {
    category: "JavaScript",
    question: "Which keyword is used to declare a constant variable?",
    choices: ["const", "let", "var"],
    answer: "const"
};

const Q2 = {
    category: "HTML",
    question: "Which HTML tag is used to create a hyperlink?",
    choices: ["<a>", "<p>", "<div>"],
    answer: "<a>"
};

const Q3 = {
    category: "CSS",
    question: "Which property is used to change text color?",
    choices: ["color", "font-size", "margin"],
    answer: "color"
};

const Q4 = {
    category: "JavaScript",
    question: "Which method converts a JSON string into a JavaScript object?",
    choices: ["JSON.parse()", "JSON.stringify()", "Object.keys()"],
    answer: "JSON.parse()"
};

const Q5 = {
    category: "Databases",
    question: "Which SQL command is used to retrieve data?",
    choices: ["SELECT", "INSERT", "DELETE"],
    answer: "SELECT"
};

questions.push(Q1,Q2,Q3,Q4,Q5);

function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  }

  return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
}