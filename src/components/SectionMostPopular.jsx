import React from 'react';
import { SingleCard } from './SingleCard';
import Loading from '../components/Loading/Loading';
import { useFetch } from '../hooks/useFetch';


export const SectionMostPopular = () => {
    const { data, isPending, error } = useFetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`)

    return (
        <div className='movie-page'>
            <div className="container">
                <div className="header">
                    <h1 className="heading">Most Popular</h1>
                </div>

                {error && <p className="error">{error}</p>}
                {isPending && <Loading />}
                <div className="movie-grid">
                    {data && data.results.map((movie, i) => {
                        if (i < 12) {
                            return (
                                <SingleCard key={movie.id} movie={movie} isHome={true} />
                            )
                        }
                    })}
                </div>

            </div>
        </div>
    )
}
