import { useEffect, useState } from 'react';

const Typewriter = ({ text }) => {
    const array = text.split('');
    const [printed, setPrinted] = useState([array[0]]);

    useEffect(() => {
        if (printed.length === array.length) return;

        const timeout = setTimeout(() => {
            setPrinted((prevPrinted) => {
                const prevIndex = prevPrinted.length - 1;
                const newIndex = prevIndex + 1;
                return [...prevPrinted, array[newIndex]];
            })
        }, 100);

        return () => clearTimeout(timeout);
    }, [printed])

    return (
        <h2 onClick={() => setPrinted([array[0]])}>{printed.join('')}</h2>
    )
};

export default Typewriter;