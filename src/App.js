import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const headers = [
    `Card title`,
    `Special title treatment`
  ]

  const contents = [
    `Some quick example text to build on the card title and make up the bulk of the card's content.`,
    `With supporting text below as a natural lead-in to additional content.`
  ]

  // По уму это можно было сделать объектом и циклом, но так как карточки всего 2 - сделал так

  return (
    <React.Fragment>
      <Card headers={headers[0]} contents={contents[0]}>
        <img src="#" className="card__img-top" alt="Image cap" />
      </Card>
      <Card headers={headers[1]} contents={contents[1]} />
    </React.Fragment>
  );
}

export default App;
