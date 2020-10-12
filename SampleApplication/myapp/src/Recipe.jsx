import React from 'react'

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt="" />
            <ul>
                {ingredients.map((ing,i) => (
                    <li key={i}>{ing.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default Recipe;