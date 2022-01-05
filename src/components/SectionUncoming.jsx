import React, { useEffect } from 'react';
import { SingleCard } from './SingleCard';
import Loading from '../components/Loading/Loading';
import { useFetch } from '../hooks/useFetch';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const SectionUncoming = () => {
    const { data, isPending, error } = useFetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`)

    const animation = useAnimation();

    const { ref, inView } = useInView({ threshold: 0.1 });

    useEffect(() => {
        //console.log(inView);

        if (inView) {
            animation.start({
                //x: 0,
                opacity: 1,
                transition: {
                    type: 'spring', duration: 1.5, bounce: 0.3
                }
            });
        }
        if (!inView) {
            // animation.start({ x: '-100vw' })
            animation.start({ opacity: 0 })
        }

    }, [inView]);

    return (
        <div className='movie-page'>
            <div className="container">
                <div className="header">
                    <h1 className="heading">Top Rated</h1>
                </div>

                {error && <p className="error">{error}</p>}
                {isPending && <Loading />}
                <div ref={ref} className="movie-grid">
                    {data && data.results.map((movie, i) => {
                        if (i < 12) {
                            return (
                                <motion.div
                                    key={movie.id}
                                    animate={animation}
                                >
                                    <SingleCard key={movie.id} movie={movie} isHome={true} />
                                </motion.div>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}
