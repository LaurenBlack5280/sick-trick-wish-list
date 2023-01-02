import react from "react";
import Card from "./Card";

const CardContainer = ({ tricks }) => {
    const trickCards = tricks.map(trick => {
        return (
            <Card
                stance={trick.stance}
                name={trick.name}
                obstacle={trick.obstacle}
                tutorial={trick.tutorial}
                id={trick.id}
                key={trick.id}
            />
        )
    })
    return (
        <section>
            {trickCards}
        </section>
    )
}

export default CardContainer