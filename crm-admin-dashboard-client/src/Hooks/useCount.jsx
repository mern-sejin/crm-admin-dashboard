import { useEffect, useState } from 'react';
export const useCount = (number) => {
    const [count, setCount] = useState(0);
    const time = number < 50 ? 200 : 50 / number;
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => {
                const nextCount = prevCount + 1;
                if (nextCount >= number) {
                    clearInterval(interval);
                }
                return nextCount;
            });
        }, time);
        return () => clearInterval(interval);
    }, [number, time]);
    return [count];
};