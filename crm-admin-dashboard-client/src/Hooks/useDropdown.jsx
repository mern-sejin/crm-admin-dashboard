import { useEffect } from 'react';
export const useDropdown = (ref, anchorEl, callback) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target) && !anchorEl.contains(event.target)) {
                callback();
            }
        };
        document.body.addEventListener('click', handleClickOutside);
        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, [ref, anchorEl, callback]);
};