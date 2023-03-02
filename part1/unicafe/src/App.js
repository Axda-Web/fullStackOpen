import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Display = ({ text, value }) => {
  return (
    <div>
      {text} {value}
      {text === "positive" && "%"}
    </div>
  );
};

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  return (
    <>
      <h2>statistics</h2>
      <Display text="good" value={good} />
      <Display text="neutral" value={neutral} />
      <Display text="bad" value={bad} />
      <Display text="all" value={all} />
      <Display text="average" value={average} />
      <Display text="positive" value={positive} />
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const calcAverage = (goodValue, neutralValue, badValue) =>
    (goodValue * 1 + neutralValue * 0 + badValue * -1) /
    (goodValue + neutralValue + badValue);
  const calcPositivePercent = (goodValue, neutralValue, badValue) =>
    (goodValue / (goodValue + neutralValue + badValue)) * 100;

  const handleGoodClick = () => {
    const newGood = good + 1;
    setGood(newGood);
    setAll(newGood + neutral + bad);
    setAverage(calcAverage(newGood, neutral, bad));
    setPositive(calcPositivePercent(newGood, neutral, bad));
  };

  const handleNeutralClick = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
    setAll(newNeutral + good + bad);
    setAverage(calcAverage(good, newNeutral, bad));
    setPositive(calcPositivePercent(good, newNeutral, bad));
  };

  const handleBadClick = () => {
    const newBad = bad + 1;
    setBad(newBad);
    setAll(newBad + good + neutral);
    setAverage(calcAverage(good, neutral, newBad));
    setPositive(calcPositivePercent(good, neutral, newBad));
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
