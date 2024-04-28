import parse from 'html-react-parser';

function retrieveCardFaces(card) {
    switch (card.layout) {
        case "adventure":
        case "split":
        case "planar":
        case "flip":
        case "transform":
        case "modal_dfc":
        case "battle":
            return card.card_faces;
        case "reversible_card":
            let face = card.card_faces[0];
            return [face];
        case "normal":
        case "leveler":
        case "class":
        case "case":
        case "saga":
        case "mutate":
        case "augment":
        case "host":
            return [card];
        default:
            console.error("Unhandled layout ", card.layout);
            return [card];
    }
}

function formatSymbols(text) {
    var matches = text.match(/{(.)(\/(.))?}/g);

    if (!(matches)) {
        return text;
    }

    matches.forEach(function (symbol) {
        if (symbol == "{CHAOS}" || symbol == "{TK}" || symbol == "{PW}") {
            return;
        }

        var key = symbol.slice(1, -1)
            .replace('/', '')
            .replace('T', "tap")
            .replace('Q', "untap")
            .toLowerCase();

        text = text.replace(
            symbol,
            `<i class="ms ms-${key} ms-cost ms-shadow"></i>`
        );
    });

    return parse(text);
}

function retrieveTypedData(face) {
    if (face.power) {
        return `P/T : ${face.power}/${face.toughness}`;
    }

    if (face.loyalty) {
        return `Base Loyalty : ${face.loyalty}`;
    }

    if (face.defense) {
        return `Defense : ${face.defense}`;
    }
}

function formatOracleText(text) {
    if (typeof text.split == "undefined") {
        console.log(text)
        return text;
    }

    let splits = text.split("\n");

    return (
        splits.map((split, i) => {
            return (<p key={i}>{formatSymbols(split)}</p>)
        })
    )
}

export default function CardOracleElement({ card }) {
    if (card === null) {
        return;
    }

    let faces = retrieveCardFaces(card);

    return (
        faces.map((face, i) => {
            return (
                <div key={i} className="oracle">
                    <p>{face.name} {formatSymbols(face.mana_cost)}</p>
                    <p>{face.type_line}</p>
                    <p>{retrieveTypedData(face)}</p>
                    {formatOracleText(face.oracle_text)}
                </div>

            )
        })
    );
}
