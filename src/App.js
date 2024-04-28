import './App.css';
import Card from './Card';
import Button from '@mui/material/Button';
import * as Scry from "scryfall-sdk";
import { useState } from 'react';

function App() {
  async function onGenerateButtonClicked() {
    setCard(null);
    console.log("Retrieving card...")
    var card = await Scry.Cards.random("-t:land");
    console.log(card)
    setCard(card);
  }

  const [card, setCard] = useState(null);

  return (
    <div className="App">
      <Button
        color="secondary"
        variant="contained"
        size="large"
        onClick={onGenerateButtonClicked}>
        Let's get lucky !
      </Button>
      <Card
        card={card}
      />
    </div>
  );
}

export default App;
