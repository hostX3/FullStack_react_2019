import React, { useState } from "react";
import Statistics from './components/Statistics/index'
import Button from './components/Button'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button type={'button'} clickHandler={() => setGood(good + 1)} label={'GOOD'} />
      <Button type={'button'} clickHandler={() => setNeutral(neutral + 1)} label={'NEUTRAL'} />
      <Button type={'button'} clickHandler={() => setBad(bad + 1)} label={'BAD'} />
      {(good || neutral || bad ? <Statistics good={good} neutral={neutral} bad={bad} /> : <p>No feedback given</p>)}


    </div>
  );
};

export default App;
