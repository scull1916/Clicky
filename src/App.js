import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import Gameboard from './components/Gameboard';
import Title from './components/Title';
import Wrapper from './components/Wrapper';
import gameimages from './gameimages.json';


let score = 0;
let topScore = 0;
let message = "Click on a picture to earn points. Take care not to click on the same image more than once!"

class App extends Component {
  state = {
    gameimages,
    score,
    topScore
  };

setClicked = id => 
{
  const gameimages = this.state.gameimages;

  const clickMatch = gameimages.filter(gameimages => gameimages.id === id);

  if (clickMatch[0].clicked)
  {
    console.log("Score:" + score);
    console.log("Top Score:" + topScore);

    score = 0;
    message = "Aw man! You already clicked that one!";

    for (let i = 0; i < gameimages.length; i++)
    {
      gameimages[i].clicked = false;
    }

    this.setState({ message });
    this.setState({ score });
    this.setState({ gameimages });
  }
  else if (score < 11)
  {
    clickMatch[0].clicked = true;

    score ++;

    if (score > topScore)
    {
      topScore = score;
      this.setState = ({ topScore });
    }

    gameimages.sort(function(a, b)
    {
        return Math.floor((Math.random() * 12) + 1);
    });

        this.setState({ gameimages });
        this.setState({ score });
        this.setState({ message });
  } else
  {
    clickMatch[0].click = true;

    score = 0;

    message = "You did it, great job!";
    topScore = 12;
    this.setState({ topScore });

    for (let i=0; i < gameimages.length; i++)
    {
      gameimages[i].clicked = false;
    }

    gameimages.sort(function(a, b) 
  {
    return Math.floor((Math.random() * 12) + 1)
  });

  this.setState({ gameimages });
  this.setState({ score });
  this.setState({ message });
  }
};

  render() {
    return (
      <Wrapper>
        <Title>
          <div className = "header">
          <h3 className ="title">MEM aka Middle Earth Memory</h3> 
            <h3 className = "scores">Score = {this.state.score} | 
            Top Score = {this.state.topScore}</h3>
          </div>
          <div className = "rules">  
              <h3>How to play:</h3>
              <h4>Click on an image to begin. If you click the same image more than once, your score will reset to zero and you will restart the game.</h4>
          </div>
        </Title>
          {this.state.gameimages.map(gameimages => ( 
            <Gameboard
                key = {gameimages.id}
                image = {gameimages.image}
                id = {gameimages.id}
                clicked = {this.clicked}
            />
            ))}
        <Footer></Footer>
      </Wrapper>
    );
  }
}

export default App;
