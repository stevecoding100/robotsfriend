import React from "react";

const Card = ({ key, id, name, email }) => {
    return (
        <div className="bg-light-green  dib br3 pa3 ma2 grow shadow-5">
            <div key={key}>
                <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;
