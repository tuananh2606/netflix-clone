import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import VideoSlider from '~/components/VideoSlider';
import styles from './MovieDetails.module.scss';

const cx = classNames.bind(styles);

const MovieDetails = () => {
    const { category, id } = useParams();

    const [detailsFilm, setDetailsFilm] = useState();

    useEffect(() => {
        const getDetail = async () => {
            const { data } = await axios.get(`
            ${process.env.REACT_APP_BASE_URL}/${category}/${id}?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US&append_to_response=videos
            `);
            setDetailsFilm(data);

            if (category) {
                const resultCredit = await axios.get(`
                        ${process.env.REACT_APP_BASE_URL}/${category}/${id}/credits?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US`);
                setDetailsFilm({ ...data, ...resultCredit.data });
            }

            window.scrollTo(0, 0);
        };
        getDetail();
    }, [category, id]);

    const convertMinutes = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const minutesLeft = minutes - hours * 60;
        return hours + 'h ' + minutesLeft + 'm';
    };

    return (
        <>
            {detailsFilm && (
                <>
                    <div
                        className={cx('banner')}
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                                detailsFilm.backdrop_path || detailsFilm.poster_path
                            })`,
                        }}
                    ></div>
                    <div className={cx('container')}>
                        <div className={cx('film-info-wrapper')}>
                            <h1 className={cx('title')}>{detailsFilm.title || detailsFilm.name}</h1>
                            <div className={cx('film-info')}>
                                <span className="item-releasedate">
                                    {detailsFilm.first_air_date
                                        ? detailsFilm.first_air_date.slice(0, 4)
                                        : detailsFilm.release_date.slice(0, 4)}
                                </span>
                                <span className={cx('info-spacer')}> | </span>
                                <span className="item-genres">
                                    {' '}
                                    {detailsFilm.genres &&
                                        detailsFilm.genres
                                            .slice(0, 2)
                                            .map((genre, i) => genre.name)
                                            .join(', ')}
                                </span>
                                <span role="presentation" className={cx('info-spacer')}>
                                    {' '}
                                    |{' '}
                                </span>
                                <span className="item-runtime">
                                    <span className="duration">
                                        {category === 'tv' ? (
                                            <span className="test_dur_str">
                                                {detailsFilm.number_of_seasons < 2
                                                    ? detailsFilm.number_of_seasons + ' Season'
                                                    : detailsFilm.number_of_seasons + ' Seasons'}
                                            </span>
                                        ) : (
                                            <span className="test_dur_str">{convertMinutes(detailsFilm.runtime)}</span>
                                        )}
                                    </span>
                                </span>
                                <span role="presentation" className={cx('info-spacer')}>
                                    {' '}
                                    |{' '}
                                </span>
                                <a href={detailsFilm.homepage}>
                                    {category === 'tv' ? category.toUpperCase() + ' Shows' : 'Movies'}
                                </a>
                            </div>
                            <p className={cx('overview')}>{detailsFilm.overview}</p>
                            <div className={cx('info-talent')}>
                                <p className={cx('starring')}>
                                    <span className={cx('starring-span')}>Starring: </span>
                                    {detailsFilm.cast &&
                                        detailsFilm.cast
                                            .slice(0, 3)
                                            .map((actor) => actor.name)
                                            .join(', ')}
                                </p>
                                <p className={cx('creators')}>
                                    <span className={cx('creators-span')}>Creators: </span>
                                    {detailsFilm.created_by && detailsFilm.created_by.length > 0
                                        ? detailsFilm.created_by
                                              .slice(0, 3)
                                              .map((director) => director.name)
                                              .join(', ')
                                        : 'Unknow'}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('video')}>
                        <div className={cx('header')}>
                            <h2>Videos</h2>
                        </div>
                        <VideoSlider data={detailsFilm.videos.results} />
                    </div>
                </>
            )}
        </>
    );
};

export default MovieDetails;
