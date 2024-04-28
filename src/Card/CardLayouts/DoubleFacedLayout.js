import defaultImage from './default.png'
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function DoubleFacedLayout({ card, width, height }) {
    function onTransform() {
        setFace(-1 * face + 1)
    }

    const [face, setFace] = useState(0);

    return (
        <div className='card-container'>
            <img
                className={`card`}
                src={card !== null ? card.card_faces[face].getImageURI("png") : defaultImage}
                alt=""
                width={width}
                height={height}
            />
            <Button
                variant="contained"
                size='large'
                color="secondary"
                onClick={onTransform}>
                Transform
            </Button>
        </div>

    );
}
