import React, { useEffect, useState } from 'react';
import Cards from './components/card';
import logo from './logo.svg';
import './App.css';

function App() {

  function generatenums () {
    let numarr = [];
    while(numarr.length<9) {
      let randnum = Math.floor(Math.random() * 30)
      if (!numarr.includes(randnum)) {
      numarr.push(randnum)
    }
    }
    return numarr;
  }

  const [randomarr, setRandomArr] = useState(() => {
    const initialarr = generatenums();
    return initialarr;
  });
  const [chosencards, setChosenCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highscore, setHighScore] = useState(0);

  function HandleCardClick(cardclicked) {
    if (chosencards.length === 0) {
      let chosencopy = [];
      chosencopy.push(cardclicked);
      setChosenCards(chosencopy);
      setScore(score + 1);
    }

    if (!chosencards.includes(cardclicked) && chosencards.length >0) {
      let chosencopy = [...chosencards];
      chosencopy.push(cardclicked);
      setChosenCards(chosencopy);
      setScore(score + 1);
    }
    if (chosencards.includes(cardclicked)) {
    setChosenCards([]);
    if (score > highscore) {
      setHighScore(score);
    }
     setScore(0);
    }
  
  if (score === 30) {
    setHighScore(score);
    setChosenCards([]);
  }
}
  

 
  return (
    <div className="App">
    <div id="gametitle">NBA Memory Card Game</div>
    <div id="scorecont">
      <div id="score">Score: {score}</div>
      <div id="highscore">High Score: {highscore} </div>
    </div>
    <ul className="cardlist">
      {randomarr.map((rand) => {
        return(
          <li key={rand}>
            <Cards
            value={rand}
            onClick={(cardclicked) => {
              console.log(cardclicked)
              HandleCardClick(cardclicked);
              setRandomArr(() => {
                const newarr = generatenums();
                return newarr;
                });
            }}
            />
          </li>
        )
      })}
    </ul>
    </div>
  );
}

export default App;
