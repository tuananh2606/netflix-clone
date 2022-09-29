import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { getDetailsMovie } from '~/features/movieSlide';
import { MdClose } from 'react-icons/md';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import styles from './MovieDetails.module.scss';

const cx = classNames.bind(styles);

const MovieDetails = (props) => {
    const { showModal, movie } = props;

    const dispatch = useDispatch();
    const handleCloseModal = () => {
        dispatch(getDetailsMovie(null));
        enableBodyScroll(document);
    };
    disableBodyScroll(document);

    return (
        <>
            <div className={`backdrop ${showModal ? 'showBackdrop' : 'hideBackdrop'}`} onClick={handleCloseModal}></div>
            <div
                className={cx('modal', showModal ? 'showModal' : 'hideModal')}
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                        movie.backdrop_path || movie.poster_path
                    })`,
                    backgroundSize: 'cover',
                }}
            >
                <div className={cx('container')}>
                    <div className={cx('movie-info')}>
                        <h1 className={cx('title')}>{movie && (movie.title || movie.name)}</h1>
                        <p className={cx('description')}>
                            <span className={cx('rating')}>
                                Rating: {movie && (movie.vote_average * 10).toFixed()}%
                            </span>
                            <span className={cx('popularity')}>Popularity: {movie && movie.popularity}</span>
                        </p>
                        <p className={cx('releasedate')}>
                            Release date: {(movie && movie.release_date) || movie.first_air_date}
                        </p>
                        <p className={cx('overview')}>{movie && movie.overview}</p>
                    </div>
                </div>
                <MdClose className={cx('closeBtn')} onClick={handleCloseModal} />
            </div>
        </>
    );
};

export default MovieDetails;
