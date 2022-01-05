import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { SingleCard } from './SingleCard';
import { motion } from 'framer-motion';

export const Watched = () => {
    const { watched } = useContext(GlobalContext);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className='movie-page'>
                <div className="container">
                    <div className="header">
                        <h1 className="heading">Watched Movies</h1>

                        <span className="count-pill">
                            {watched.length} {watched.length === 1 ? 'Movie' : 'Movies'}
                        </span>
                    </div>

                    {watched.length > 0 ? (
                        <div className="movie-grid">
                            {watched.map(movie => (
                                <SingleCard key={movie.id} movie={movie} type='watched' />
                            ))}
                        </div>
                    ) : (
                        <h2 className='no-movies'>No movies in your list</h2>
                    )}

                </div>
            </div>
        </motion.div>
    )
}
