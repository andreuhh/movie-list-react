import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { SingleCard } from './SingleCard';

export const Watched = () => {
    const { watched } = useContext(GlobalContext);

    return (
        <div className='movie-page'>
            <div className="container">
                <div className="header">
                    <div className="heading">Watched Movies</div>
                </div>

                {watched.length > 0 ? (
                    <div className="movie-grid">
                        {watched.map(movie => (
                            <SingleCard key={movie.id} movie={movie} type='watched' />
                        ))}
                    </div>
                ) : (
                    <h2>No movies in your list</h2>
                )}

            </div>
        </div>
    )
}
