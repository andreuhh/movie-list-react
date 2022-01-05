import React from 'react';
import { SectionMostPopular } from './SectionMostPopular';
import { SectionUncoming } from './SectionUncoming';
import { motion } from 'framer-motion';

export const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <SectionMostPopular />
            <SectionUncoming />
        </motion.div>
    )
}