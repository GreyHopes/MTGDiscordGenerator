import DefaultLayout from "./CardLayouts/DefaultLayout";
import FlipLayout from "./CardLayouts/FlipLayout";
import DoubleFacedLayout from "./CardLayouts/DoubleFacedLayout";
import CardOracleElement from "./CardOracleElement";
import { Button } from "@mui/material";


function getCardLayout(card, width, height) {
    if (card?.layout == "flip") {
        return (
            <FlipLayout
                card={card}
                width={width}
                height={height}
            />
        );
    }

    if (card?.layout == "transform"
        || card?.layout == "modal_dfc"
        || card?.layout == "reversible_card"
        || card?.layout == "battle") {
        return (
            <DoubleFacedLayout
                card={card}
                width={width}
                height={height}
            />
        );
    }

    return (
        <DefaultLayout
            card={card}
            width={width}
            height={height}
        />
    );
}


export default function Card({ card, width, height }) {
    return (
        <div className='card-container'>
            {getCardLayout(card, width, height)}
            {card !== null ? (<Button
                variant="contained"
                size='large'
                color="secondary"
                href={card.scryfall_uri}
                target="_blank"
                rel="noreferrer noopener">
                Open on Scryfall
            </Button>) : ""}
            <CardOracleElement card={card}></CardOracleElement>
        </div>

    );
}
