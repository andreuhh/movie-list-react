import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { SingleCard } from './SingleCard';

export const Watchlist = () => {
    const { watchlist } = useContext(GlobalContext);

    console.log(watchlist);

    return (
        <div className='movie-page'>
            <div className="container">
                <div className="header">
                    <div className="heading">My Watchlist</div>
                </div>

                {watchlist.length > 0 ? (
                    <div className="movie-grid">
                        {watchlist.map(movie => (
                            <SingleCard key={movie.id} movie={movie} type='watchlist' />
                        ))}
                    </div>
                ) : (
                    <h2>No movies in your list</h2>
                )}

            </div>
        </div>
    )
}
