import React from "react"

function Questionnaire(props) {
  const questionsEl = props.questions.map((question, index) => (
    <div key={index} className="question-container">
      <h3>{question.question}</h3>
      <ul className="choices-container">
        {question.incorrect_answers.map((choice, choiceIndex) => (
          <li key={choiceIndex} className="question-choices">{choice}</li>
        ))}
      </ul>
    </div>
  ));
  return (
    <main>
      {questionsEl}
    </main>
  );
}

export default Questionnaire