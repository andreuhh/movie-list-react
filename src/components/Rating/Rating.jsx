import React from 'react';
import './Rating.css';

export const Rating = ({ rating }) => {
    return (
        <div className="rating" style={{ borderColor: rating > 8 ? "green" : rating > 6 ? "orange" : "red", }}>{rating}</div>
    )
}
