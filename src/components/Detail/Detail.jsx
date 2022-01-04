import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import Loading from '../Loading/Loading';
import { useFetch } from '../../hooks/useFetch';
import { GlobalContext } from '../../context/GlobalState';
import './Detail.css';

export const Detail = () => {

    const { id } = useParams()
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`


    const { data: movie, isPending, error } = useFetch(url)
    console.log(movie);

    const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } = useContext(GlobalContext);
    let storedMovie = watchlist.find(obj => obj?.id === movie?.id);
    let storedMovieWatched = watched.find(o => o?.id === movie?.id);

    const watchlistDisabled = storedMovie
        ? true
        : storedMovieWatched
            ? true
            : false;

    const watchedDisabled = storedMovieWatched ? true : false;

    return (
        <div className='movie-page'>
            <div className="container container-detail">
                {error && <p className="error">{error}</p>}
                {isPending && <Loading />}
                {movie && (
                    <>
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
                        <div className='infoContainer'>
                            <h1>{movie.title}</h1>
                            <h3>{movie.tagline}</h3>
                            <h5>{movie.release_date}</h5>
                            <p>{movie.overview}</p>

                            <p>
                                Budget : {movie.budget}$
                            </p>

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
                    </>
                )}

            </div>
        </div>

    )
}
