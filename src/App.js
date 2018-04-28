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
        image: "image-01",
        clicked: false
      },
      {
        id: 2, 
        image: "image-02", 
        clicked: false},
      {
        id: 3,
        image: "image-03",
        clicked: false
      },
      {
        id: 4,
        image: "image-04",
        clicked: false
      },
      {
        id: 5,
        image: "image-05",
        clicked: false
      },
      {
        id: 6,
        image: "image-06",
        clicked: false
      },
      {
        id: 7,
        image: "image-07",
        clicked: false
      },
      {
        id: 8,
        image: "image-08",
        clicked: false
      },
      {
        id: 9,
        image: "image-09",
        clicked: false
      },
      {
        id: 10,
        image: "image-10",
        clicked: false
      },
      {
        id: 11,
        image: "image-11",
        clicked: false
      },
      {
        id: 12,
        image: "image-12",
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
        <gamecontainer
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
        />

    );
  }
}

export default App;
