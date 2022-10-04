import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import * as sliderServices from '~/services/sliderService';
import ListItem from '~/components/ListItem';
import styles from './SlideList.module.scss';

const cx = classNames.bind(styles);

function SampleNextArrow(props) {
    const { onClick } = props;
    return <IoIosArrowForward className={cx('forward-icon')} onClick={onClick} />;
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return <IoIosArrowBack className={cx('back-icon')} onClick={onClick} />;
}

function SlideList(props) {
    const { fetchURL, heading, category } = props;
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const data = await sliderServices.getMovies(fetchURL);
            setMovies(data.results);
        };
        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const settings = {
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className={cx('wrapper')}>
            {/* <IoIosArrowBack className={cx('back-icon')} /> */}
            <div className={cx('heading')}>{heading}</div>
            <div className={cx('content')}>
                <Slider {...settings}>
                    {movies &&
                        movies.length > 0 &&
                        movies.map((item, index) => {
                            let imageUrl = `https://image.tmdb.org/t/p/original/${
                                item.poster_path || item.backdrop_path
                            }`;
                            if (item.poster_path === null) {
                                imageUrl = `https://image.tmdb.org/t/p/w500/${item.backdrop_path || item.poster_path}`;
                            }
                            return <ListItem key={index} data={item} category={category} imageUrl={imageUrl} />;
                        })}
                </Slider>
            </div>
            {/* <IoIosArrowForward className={cx('forward-icon')} /> */}
        </div>
    );
}

export default SlideList;
