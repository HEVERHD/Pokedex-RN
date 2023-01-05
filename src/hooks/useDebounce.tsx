import { useState, useEffect } from 'react';

export default function useDebounce(input: string = '', time: number = 500) {
    const [debounce, setDebounce] = useState(input);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounce(input);
        }, time);

        return () => {
            clearTimeout(timeout);
        };
    }, [input]);

    return debounce;
}
