import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

/* eslint-disable jsx-a11y/iframe-has-title */
import ReactPlayer from 'react-player';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames/bind';

import styles from './VideoSlider.module.scss';

const cx = classNames.bind(styles);

const VideoSlider = (props) => {
    const { data } = props;
    return (
        <div className={cx('video-slider')}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                scrollbar={{ draggable: true }}
            >
                <div className={cx('video-slider-container')}>
                    {data &&
                        data.length > 0 &&
                        data.slice(0, 3).map((video, index) => (
                            <SwiperSlide key={index} className={cx('player-wrapper')}>
                                <ReactPlayer
                                    className={cx('react-player')}
                                    url={`https://www.youtube.com/embed/${video.key}`}
                                    width="100%"
                                    height="90%"
                                    controls={true}
                                />
                            </SwiperSlide>
                        ))}
                </div>
            </Swiper>
        </div>
    );
};

export default VideoSlider;
