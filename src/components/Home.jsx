import React, { useState } from 'react';
import { SingleCard } from './SingleCard';
import { useFetch } from '../hooks/useFetch'

export const Home = () => {

    const { data, isPending, error } = useFetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`)
    console.log(data);

    return (
        <div className='movie-page'>
            <div className="container">
                <div className="header">
                    <h1 className="heading">Popular</h1>
                </div>

                {error && <p className="error">{error}</p>}
                {isPending && <p className="loading">Loading...</p>}
                <div className="movie-grid">
                    {data && data.results.map((movie) => (
                        <SingleCard key={movie.id} movie={movie} type='watched' />
                    ))}
                </div>

            </div>
        </div>


    )
}