import React, { useContext } from 'react';
import { SingleCardControls } from './SingleCardControls';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';


export const SingleCard = ({ movie, type, isHome }) => {
    const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } = useContext(GlobalContext);

    let storedMovie = watchlist.find(obj => obj.id === movie.id);
    let storedMovieWatched = watched.find(o => o.id === movie.id);

    const watchlistDisabled = storedMovie
        ? true
        : storedMovieWatched
            ? true
            : false;

    return (
        <div>
            <div className="movie-card">
                <div className="overlay"></div>

                <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={`${movie.title} Poster`}
                />

                <SingleCardControls type={type} movie={movie} />
            </div>
            <Link to={`/movie-detail/${movie.id}`}>
                <div className='movie-data'>
                    <h3>{movie.title}</h3>
                </div>
            </Link>

            {isHome && (
                <button
                    className="btn"
                    disabled={watchlistDisabled}
                    onClick={() => addMovieToWatchlist(movie)}
                >Add to Watchlist
                </button>
            )}
        </div>
    )
}
