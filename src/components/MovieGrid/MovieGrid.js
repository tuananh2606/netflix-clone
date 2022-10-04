import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import * as sliderServices from '~/services/sliderService';
import ListItem from '../ListItem';
import styles from './MovieGrid.module.scss';

const cx = classNames.bind(styles);

const MovieGrid = (props) => {
    const { request, searchValue, category } = props;
    const [films, setFilms] = useState();
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    useEffect(() => {
        const fetchApi = async () => {
            const data = await sliderServices.getMovies(request);
            setFilms(data.results);
            setTotalPage(data.total_pages);
        };
        fetchApi();
    }, [request]);

    useEffect(() => {
        if (searchValue) {
            setFilms(searchValue.result.results);
        }
    }, [searchValue]);

    const loadMore = async () => {
        const params = {
            page: page + 1,
        };
        const response = await sliderServices.getMovies(request, params.page);
        setFilms([...films, ...response.results]);
        setPage(page + 1);
    };

    return (
        <>
            <div className={cx('movie-grid')}>
                {films &&
                    films.length > 0 &&
                    films.map((film, index) => {
                        let imageUrl = `https://image.tmdb.org/t/p/original/${film.poster_path || film.backdrop_path}`;
                        if (film.poster_path === null) {
                            imageUrl = `https://image.tmdb.org/t/p/w500/${film.backdrop_path || film.poster_path}`;
                        }
                        return <ListItem key={index} data={film} imageUrl={imageUrl} category={category} />;
                    })}
            </div>
            {page < totalPage ? (
                <div className={cx('loadmore')}>
                    <button className={cx('btn', 'btn-outline')} onClick={loadMore}>
                        Load more
                    </button>
                </div>
            ) : null}
        </>
    );
};

export default MovieGrid;
