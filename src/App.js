import React, { useState, useCallback, useMemo } from 'react';
import logo from './logo.svg';
import './App.css';

// Whenever you add anything to the set, it only will add it to the list if it's unique
const functions = new Set();

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementCount1 = useCallback(() => setCount1(count1 + 1), [count1]);
  const incrementCount2 = useCallback(() => setCount2(count2 + 1), [count2]);

  // This func does NOT need to be re-generated (a new version), it doesn't have any dependencies
  // const logName = useCallback(() => console.log('Henry Chung'), []); // Generating this func new every single time on every single render

  // functions.add(logName);
  // functions.add(incrementCount1);
  // functions.add(incrementCount2);

  // console.log(functions);

  // useMemo: Show giá trị kết quả đã cache khi cả component re-render mà dependencies của hàm ko đổi
  // useMemo bao hàm luôn tính năng của useCallback
  const doSomethingComplicated = useMemo(() => {
    console.log('I am computing something complex');
    return ((count1 * 1000) % 12.4) * 51000 - 4000;
  }, [count1]);

  functions.add(doSomethingComplicated);

  console.log(functions);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />

        Count1: {count1}
        <button onClick={incrementCount1}>Increase Count1</button>

        Count2: {count2}
        <button onClick={incrementCount2}>Increase Count2</button>

        {/*<button onClick={logName}>Log Name</button>*/}

        complexValue: {doSomethingComplicated}
      </header>
    </div>
  );
};

export default App;
