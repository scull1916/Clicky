import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer';
import Gameboard from './components/gameboard';
import Header from './components/header';
// import Images from './components/images';
import Jumbo from './components/jumbo';
import Wrapper from './components/wrapper';
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

  const clickMatch = gameimages.filter(match => match.id === id);

  if (clickMatch[0].clicked)
  {
    console.log("Score:" + score);
    console.log("Top Score:" + topScore);

    score = 0;
    message = "Aw man! You already clicked that one!";

    for (i = 0; i < gameimages.length; i++)
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

    for (i=0; i < gameimages.length; i++)
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
        <Header
          score = {this.state.counter}
          topScore = {this.state.topScore}
        />
        <Jumbo />
        <Gameboard>
          {
            this.state.gameimages.map(match => 
              <Gameboard
                key = {match.id}
                images = {match.images}
                id = {match.id}
                clicked = {this.clicked}
              />
            )}
        </Gameboard>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
