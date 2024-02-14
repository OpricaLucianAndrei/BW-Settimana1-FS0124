const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];
  const exstractTextQuestionH2 = document.getElementById("idTextQuestions");
  const textBenchmark = document.getElementById("textBenchmark");
  window.addEventListener("load", init());
  function init() {
    views();
    //eventBtn();
    // timer();
  }
  
  function exstractQuestion(i) {
    const h2Question = document.getElementById("idTextQuestions");
    h2Question.innerHTML = `<h2>${questions[i].question}</h2>`;
  }
  
  function exstract(index) {
    let answer = [];
     answer= questions[index].incorrect_answers;
     const ran=Math.floor(Math.random()*(questions[index].incorrect_answers.length+1));
     answer.splice(ran,0,questions[index].correct_answer);
    //  console.log(answer);
    answer.forEach(element => {
    const divQuestion = document.createElement("div");
    const inputQuestion = document.createElement("input");
    const labelQuestion = document.createElement("label");
    divQuestion.setAttribute("class", "domanda");
    inputQuestion.setAttribute("type", "radio");
    inputQuestion.setAttribute('value',element);
    inputQuestion.setAttribute('id',element);
    labelQuestion.setAttribute('for',element);
    labelQuestion.innerText=element;
    divQuestion.appendChild(inputQuestion);
    divQuestion.appendChild(labelQuestion);
    textBenchmark.appendChild(divQuestion);
  });
  
  }
  
  /* visualizza domanda e testo */
  function views() {
    let i = 0;
    if (i === 0) {
      exstractQuestion(i);
      exstract(i);
    }
    i++;
    const timer = setInterval(function() {
      const allQuestions = document.querySelectorAll(".domanda");
      allQuestions.forEach(element=> {
        element.remove();
      });
      exstractQuestion(i);
      exstract(i);
  
      i++;
    }, 1000);
  }
  
  function eventBtn() {
    // const btnBenchmark=document.getElementById('btnBenchmark');
    //     btnBenchmark.addEventListener('click',function(e){
    //         e.preventDefault();
    //         console.log(document.forms.textBenchmark.fav_language.value);
    //     })
  }
  