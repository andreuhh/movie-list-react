import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { SingleCard } from './SingleCard';
import { motion } from 'framer-motion';

export const Watchlist = () => {
    const { watchlist } = useContext(GlobalContext);

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
                        <h1 className="heading">My Watchlist</h1>

                        <span className="count-pill">
                            {watchlist.length} {watchlist.length === 1 ? 'Movie' : 'Movies'}
                        </span>
                    </div>

                    {watchlist.length > 0 ? (
                        <div className="movie-grid">
                            {watchlist.map(movie => (
                                <SingleCard key={movie.id} movie={movie} type='watchlist' />
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
