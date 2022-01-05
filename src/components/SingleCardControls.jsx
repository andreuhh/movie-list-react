import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const SingleCardControls = ({ movie, type }) => {
    const {
        removeMovieFromWatchlist,
        addMovieToWatched,
        moveToWatchlist,
        removeFromWatched
    } = useContext(GlobalContext);

    return (
        <div className='inner-card-controls'>
            {type === 'watchlist' && (
                <>
                    <button onClick={() => addMovieToWatched(movie)} className='ctrl-btn'>
                        <i className='fa-fw far fa-eye'></i>
                    </button>

                    <button onClick={() => removeMovieFromWatchlist(movie.id)} className='ctrl-btn'>
                        <i className='fa-fw fa fa-times'></i>
                    </button>
                </>
            )}

            {type === 'watched' && (
                (
                    <>
                        <button onClick={() => moveToWatchlist(movie)} className='ctrl-btn'>
                            <i className='fa-fw far fa-eye-slash'></i>
                        </button>

                        <button onClick={() => removeFromWatched(movie.id)} className='ctrl-btn'>
                            <i className='fa-fw fa fa-times'></i>
                        </button>
                    </>
                )
            )}
        </div>
    )
}
