import DefaultLayout from "./CardLayouts/DefaultLayout";
import FlipLayout from "./CardLayouts/FlipLayout";
import DoubleFacedLayout from "./CardLayouts/DoubleFacedLayout";

export default function Card({ card, width, height }) {
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
