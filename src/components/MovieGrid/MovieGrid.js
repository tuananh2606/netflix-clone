import classNames from 'classnames/bind';
import styles from './MovieGrid.module.scss';

const cx = classNames.bind(styles);

const MovieGrid = ({ children }) => {
    return <div className={cx('movie-grid')}>{children}</div>;
};

export default MovieGrid;
