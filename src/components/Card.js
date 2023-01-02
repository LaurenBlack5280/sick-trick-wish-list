import react from "react";

const Card = ({ stance, name, obstacle, tutorial, id }) => {
    return (
        <div className="card">
            <h3>{stance} {name}</h3>
            <p>
                <span>obstacle: { obstacle }</span>
                <span>link to tutorial:</span>
                <span>{ tutorial }</span>
            </p>
        </div>
    )
}

export default Card