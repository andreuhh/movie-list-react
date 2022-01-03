import React from 'react'

export const SingleCard = ({ movie, type }) => {
    return (
        <div className="movie-card">
            <div className="overlay"></div>

            <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={`${movie.title} Poster`}
            />


        </div>
    )
}
