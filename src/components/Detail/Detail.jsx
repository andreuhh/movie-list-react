import React from 'react';
import { useParams } from 'react-router';
import Loading from '../Loading/Loading';
import { useFetch } from '../../hooks/useFetch';
import './Detail.css';

export const Detail = () => {

    const { id } = useParams()
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`


    const { data: movie, isPending, error } = useFetch(url)
    console.log(movie);

    return (
        <div>
            {movie && (
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
            )}
        </div>
    )
}
