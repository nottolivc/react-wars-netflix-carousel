import React, { Component } from 'react';
import Slider from './components/NetflixSlider'
import './App.scss'

const movies = [
  {
    id: 1,
    image: './images/starwars0.jpg',
    imageBg: './images/starwars1.jpg',
    title: 'React Star Wars'
  },
  {
    id: 2,
    image: './images/starwars2.jpg',
    imageBg: './images/starwars3.jpg',
    title: 'React Star Wars'
  },
  {
    id: 3,
    image: './images/starwars4.jpg',
    imageBg: './images/starwars5.jpg',
    title: 'React Star Wars'
  },
  {
    id: 4,
    image: './images/starwars0.jpg',
    imageBg: './images/starwars6.jpg',
    title: 'Darth Vader'
  }
];

class App extends Component {
  render() {
    return (
      <div className="app">
        <Slider>
          {movies.map(movie => (
            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
          ))}
        </Slider>
      </div>
    );
  }
}

export default App;
