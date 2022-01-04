import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

export const ListCard = ({ movie }) => {
    const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } = useContext(GlobalContext);

    let storedMovie = watchlist.find(obj => obj.id === movie.id);
    let storedMovieWatched = watched.find(o => o.id === movie.id);

    const watchlistDisabled = storedMovie
        ? true
        : storedMovieWatched
            ? true
            : false;

    const watchedDisabled = storedMovieWatched ? true : false;

    return (
        <div className='result-card'>
            <div className="poster-wrapper">
                {movie.poster_path ? (
                    <Link to={`/movie-detail/${movie.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
                    </Link>
                ) : (
                    <Link to={`/movie-detail/${movie.id}`}>
                        <div className='filler-poster'></div>
                    </Link>
                )}
            </div>

            <div className="info">
                <div className="header">
                    <Link to={`/movie-detail/${movie.id}`}>
                        <h3 className="title">{movie.title}</h3>
                    </Link>
                    <p className="release-date">{movie?.release_date?.substring(0, 4)}</p>
                    <div className="rating rating-add" style={{ borderColor: movie.vote_average > 8 ? "green" : movie.vote_average > 6 ? "orange" : "red", }}>{movie.vote_average}</div>
                </div>

                <div className="controls">
                    <button
                        className="btn"
                        disabled={watchlistDisabled}
                        onClick={() => addMovieToWatchlist(movie)}
                    >Add to Watchlist
                    </button>

                    <button
                        className="btn"
                        disabled={watchedDisabled}
                        onClick={() => addMovieToWatched(movie)}
                    >Add to Watched
                    </button>
                </div>

            </div>

        </div>
    )
}