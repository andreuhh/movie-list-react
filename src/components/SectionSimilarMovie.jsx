import React from 'react';
import { SingleCard } from './SingleCard';
import Loading from './Loading/Loading';
import { useFetch } from '../hooks/useFetch';

export const SectionSimilarMovie = ({ id }) => {
    const { data, isPending, error } = useFetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`)
    console.log('relatives', data);

    return (
        <div className='movie-page'>
            <div className="container">
                <div className="header">
                    <h2 className="heading">Similar Movies</h2>
                </div>

                {error && <p className="error">{error}</p>}
                {isPending && <Loading />}
                <div className="movie-grid">
                    {data && data.results.map((movie, i) => {
                        if (i < 4) {
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
