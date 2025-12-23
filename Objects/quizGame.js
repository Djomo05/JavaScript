const questions = [
    {
        category:"Programming",
        question: "What's your best programming language ?",
        choices: ["JavaScript", "Python", "C++"],
        answer: "JavaScript"
    },
    {
        category:"Programming",
        question: "Are you a FullStack Developper ?",
        choices: ["Oui", "Non", "Oui/Non"],
        answer: "Oui"
    },
    {
        category:"Programming",
        question: "Do you have a girlfriend ?",
        choices: ["Oui", "Non", "Oui/Non"],
        answer: "Non"
    },
    {
        category:"Programming",
        question: "Where do you live ?",
        choices: ["Winnipeg", "Montreal", "Toronto"],
        answer: "Winnipeg"
    },
    {
        category:"Programming",
        question: "How many brother do I have ?",
        choices: ["two", "one", "zero"],
        answer: "one"
    },
];


function getRandomQuestion(questionArr) {
    const randomNum = Math.floor(Math.random() * questionArr.length);
    return questionArr[randomNum];
}


function getRandomComputerChoice(choicesArr){
    const randomNum = Math.floor(Math.random() * choicesArr.length);
    return choicesArr[randomNum];
}


function getResults(qr, cr){
    if(qr.answer === cr){
        return "The computer's choice is correct!";
    }else {
        return `The computer's choice is wrong. The correct answer is: ${qr.answer}`;
    }
}

let q = getRandomQuestion(questions);
let c = getRandomComputerChoice(q.choices);
getResults(q, c);