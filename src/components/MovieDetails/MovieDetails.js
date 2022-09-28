import classNames from 'classnames/bind';

import styles from './MovieDetails.module.scss';

const cx = classNames.bind(styles);

const MovieDetails = () => {
    return (
        <>
            <div
                className={cx('backdrop')}
                style={{
                    backgroundImage: `url(https://technews.com.vn/wp-content/uploads/2022/03/the-witcher-new.jpg)`,
                    backgroundSize: 'cover',
                }}
            ></div>
            <div className={cx('modal')}>
                <div className={cx('container')}>
                    <div className={cx('movie-info')}>
                        <h1 className={cx('title')}>The Witcher</h1>
                        <p className={cx('description')}>
                            <span className={cx('rating')}>Rating: 82%</span>
                            <span className={cx('popularity')}>Popularity: 123</span>
                        </p>
                        <p className={cx('releasedate')}>Release date</p>
                        <p className={cx('runtime')}></p>
                        <p className={cx('overview')}></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieDetails;
