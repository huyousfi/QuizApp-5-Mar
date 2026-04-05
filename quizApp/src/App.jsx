import React, {useEffect, useRef, useState} from 'react'
import Btn from './components/Btn.jsx';
// import { arryShuffle } from 'array-shuffle';

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const [questions, setQuestions] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const input = useRef([]);

  useEffect(() => {
    fetch("https://the-trivia-api.com/v2/questions")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      setData(res);
      console.log(res);
    })
    .catch((err) => {
      setError(true);
      console.log(err);
    })
    .finally(() => {
      setLoading(false);
    });

  }, []);
  return (
    <>
    <h1>Welcome</h1>
    <Btn title="Next" />
    </>
  )
}

export default App