import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {decode} from 'html-entities';
import Start from './components/Start'
import Questionnaire from './components/Questionnaire';

function App() {
  const [questionnaires, setQuestionnaires] = useState([])
  const [start, setStart] = useState(false)
  
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then(res => res.json())
      .then(data => {
        const formattedQuestionnaires = data.results.map(result => ({
          question: decode(result.question),
          correct_answer: result.correct_answer,
          incorrect_answers: result.incorrect_answers
        }))
        setQuestionnaires(formattedQuestionnaires)        
      })
  }, [start])

  function handleStart() {
    setStart(prevStart => !prevStart);
  }

  return (
    <>
      {start ? (
        <Questionnaire questions={questionnaires} />
      ) : (
        <Start handleClick={handleStart} />
      )}
    </>
  )
}

export default App
