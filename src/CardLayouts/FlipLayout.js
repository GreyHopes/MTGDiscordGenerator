import defaultImage from './../default.png'
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function FlipLayout({ card, width, height }) {
    function onFlipClicked() {
        setFlip(flip == false);
    }

    const [flip, setFlip] = useState(false);

    return (
        <div className='card-container'>
            <img
                className={`card ${flip ? "card-flipped" : ""}`}
                src={card !== null ? card.getImageURI("png") : defaultImage}
                alt=""
                width={width}
                height={height}
            />
            <Button
                variant="contained"
                size='large'
                color="secondary"
                onClick={onFlipClicked}>
                Flip
            </Button>
        </div>

    );
}
