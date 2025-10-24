import { motion } from "motion/react";
import { useEffect, useState } from 'react';

function NumberGrid() {
    const [grid, setGrid] = useState(Array(5).fill().map(() => Array(6).fill(0)));

    useEffect(() => {
        const interval = setInterval(() => {
            setGrid(prevGrid => {
                const newGrid = prevGrid.map(row => [...row]);
                const randomRow = Math.floor(Math.random() * 5);
                const randomCol = Math.floor(Math.random() * 6);
                newGrid[randomRow][randomCol] = newGrid[randomRow][randomCol] === 0 ? 1 : 0;
                return newGrid;
            });
        }, 100); // Change a number every 300ms

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="font-firaCode text-2xl md:text-4xl xl:text-6xl opacity-10 grid grid-cols-6 gap-8">
            {grid.map((row, rowIndex) => (
                row.map((num, colIndex) => (
                    <motion.div
                        key={`${rowIndex}-${colIndex}`}
                        initial={{ opacity: 0.1 }}
                        animate={{ 
                            opacity: [0.1, 0.5, 0.8],
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                            times: [0, 0.5, 1],
                            repeat: Infinity,
                            repeatDelay: Math.random() * 2
                        }}
                        className="inline-block"
                    >
                        {num}
                    </motion.div>
                ))
            ))}
        </div>
    );
}

export default NumberGrid;