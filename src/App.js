import React, { Component } from 'react';
import './App.css';
import footer from './components/footer';
import gamecontainer from './components/gamecontainer';
import header from './components/header';
import images from './components/images';
import jumbo from './components/jumbo';
import wrapper from './components/wrapper';
import logo from './logo.svg';

class App extends Component {
  state = {
    image: [
      {
        id: 1,
        image: "https://placehold.it/200x200",
        clicked: false
      },
      {
        id: 2, 
        image: "https://placehold.it/200x200", 
        clicked: false},
      {
        id: 3,
        image: "https://placehold.it/200x200",
        clicked: false
      },
      {
        id: 4,
        image: "https://placehold.it/200x200",
        clicked: false
      },
      {
        id: 5,
        image: "https://placehold.it/200x200",
        clicked: false
      },
      {
        id: 6,
        image: "https://placehold.it/200x200",
        clicked: false
      },
      {
        id: 7,
        image: "https://placehold.it/200x200",
        clicked: false
      },
      {
        id: 8,
        image: "https://placehold.it/200x200",
        clicked: false
      },
      {
        id: 9,
        image: "https://placehold.it/200x200",
        clicked: false
      },
      {
        id: 10,
        image: "https://placehold.it/200x200",
        clicked: false
      },
      {
        id: 11,
        image: "https://placehold.it/200x200",
        clicked: false
      },
      {
        id: 12,
        image: "https://placehold.it/200x200",
        clicked: false
      }
    ],
    counter: 0,
    topScore: 0
  };

  sortImages = (id, clicked) => {
    const imageOrder = this.state.image;

    if (clicked)
    {
      console.log("true");
      imageOrder.forEach((img, index) =>
      {
        imageOrder[index].clicked = false;
      });
      return this.setState(
      {
        image: imageOrder.sort(() => Math.floor((Math.random() * 12) + 1),
        topScore: this.state.counter,
        counter: 0
      });
    })
    else
    {
      console.log("false");
      imageOrder.forEach((img, index) => 
      {
        if (id === image.id)
        {
          imageOrder.index.clicked = true;
        }
      });
      return this.setState(
      {
        image: imageOrder.sort(() => Math.floor((Math.random() * 12) + 1),
        counter: this.state.counter + 1
      });
    })
  };


  render() {
    return (
      <wrapper>
        <header
          score = {this.state.counter}
          topScore = {this.state.topScore}
        />
        <jumbo />
        <gamecontainer>
          {
            this.state.image.map(image => 
              <images
                key = {image.id}
                sortImages = {this.sortImages}
                id = {image.id}
                src = {image.image}
                clicked = {image.clicked}
              />
            )}
        </gamecontainer>
      </wrapper>
    );
};

export default App;
