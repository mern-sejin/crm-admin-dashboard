import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
export default function CustomLink ({ children, to, className, id, target }) {
    const { pathname } = useLocation();
    return (
        <Link to={to} className={pathname === to ? className + ' active' : className} 
        id={id} target={target}>
            { children }
        </Link>
    );
};
CustomLink.propTypes = {
    children: PropTypes.node,
    to: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.string,
    target: PropTypes.string,
};