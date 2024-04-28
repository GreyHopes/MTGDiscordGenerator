import defaultImage from './default.png'

export default function DefaultLayout({ card, width, height }) {
    let rotate = false;
    if (card !== null) {
        rotate = card.layout == "split" || card.layout == "planar";
    }

    return (
        <img
            className={`card ${rotate ? "card-rotated" : ""}`}
            src={card !== null ? card.getImageURI("png") : defaultImage}
            alt=""
            width={width}
            height={height}
        />
    );
}
