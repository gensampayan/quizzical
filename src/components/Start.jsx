import React from "react"

function Start(props) {
  return (
    <main>
      <h1>Quizzical</h1>
      <p>Test your knowledge and wit in this trivia questions</p>
      <button onClick={props.handleClick}>Start Quiz</button>
    </main>
  )
}

export default Start