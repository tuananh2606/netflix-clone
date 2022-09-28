import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import axios from 'axios';
import YouTube from 'react-youtube';

import { AiOutlineClose } from 'react-icons/ai';
import * as sliderServices from '~/services/sliderService';
import request from '~/utils/request';
import styles from './VideoFeatured.module.scss';

const cx = classNames.bind(styles);

function VideoFeatured() {
    const [movie, setMovie] = useState([]);
    const [trailer, setTrailer] = useState();
    const [idMovie, setIdMovie] = useState([]);
    const [isPlay, setIsPlay] = useState(false);

    useEffect(() => {
        const fetchApi = async () => {
            const { results } = await sliderServices.getMovies(request.requestTrendingMovies);
            const movieRandom = results[Math.floor(Math.random() * results.length)];
            setIdMovie([movieRandom.id]);

            //console.log(movieRandom.id);
            setMovie(movieRandom);
        };
        fetchApi();
    }, []);

    useEffect(() => {
        const fetchVideos = async (id) => {
            try {
                const { data } = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=dfc861413c4bcb92717c98ba8d0b4338&append_to_response=videos`,
                );
                if (data.videos.results.length === 0) {
                    const { data } = await axios.get(
                        `https://api.themoviedb.org/3/tv/${id}?api_key=dfc861413c4bcb92717c98ba8d0b4338&append_to_response=videos`,
                    );
                    setTrailer(trailer ? trailer : data.videos.results[0]);
                } else if (data.videos && data.videos.results) {
                    const trailer = data.videos.results.find(
                        (vid) => vid.name === 'Official Trailer' || 'Official Trailer 2' || 'Official Teaser',
                    );
                    setTrailer(trailer ? trailer : data.videos.results[0]);
                }
            } catch (error) {
                const { data } = await axios.get(
                    `https://api.themoviedb.org/3/tv/${id}?api_key=dfc861413c4bcb92717c98ba8d0b4338&append_to_response=videos`,
                );
                setTrailer(trailer ? trailer : data.videos.results[0]);
            }
        };
        if (idMovie && idMovie.length > 0) {
            fetchVideos(idMovie[0]);
        }
    }, [idMovie]);

    const handlePlay = () => {
        setIsPlay((prev) => !prev);
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <img
                    className={cx('image')}
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
                    alt=""
                ></img>
                <div className={cx('info-video')}>
                    <h5 className={cx('title')}>{movie.title || movie.name}</h5>
                    <div className={cx('featured-btn')}>
                        <button className={cx('playBtn')}>Play</button>
                        <button className={cx('watchBtn')} onClick={handlePlay}>
                            Watch Trailer
                        </button>
                    </div>
                    <p className={cx('releaseDate')}>Released: {movie.release_date || movie.first_air_date}</p>
                    <p className={cx('desc')}>{movie.overview}</p>
                </div>
            </div>
            <div className={cx('trailer-video')}>
                {isPlay && trailer ? (
                    <>
                        <YouTube
                            videoId={trailer.key}
                            className={cx('youtube')}
                            containerClassName={'youtube-container'}
                            opts={{
                                width: '1080',
                                height: '608',
                                playerVars: {
                                    autoplay: 1,
                                    controls: 1,
                                    cc_load_policy: 0,
                                    fs: 0,
                                    iv_load_policy: 0,
                                    modestbranding: 0,
                                    rel: 0,
                                    showinfo: 0,
                                },
                            }}
                        />
                        <AiOutlineClose onClick={handlePlay} className={cx('close-btn')} />
                    </>
                ) : (
                    <div className="center-max-size"></div>
                )}
            </div>
        </>
    );
}

export default VideoFeatured;
