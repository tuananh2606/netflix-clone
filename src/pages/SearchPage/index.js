import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import MovieDetails from '~/components/MovieDetails';
import ListItem from '~/components/ListItem';
import MovieGrid from '~/components/MovieGrid';
import styles from './SearchPage.module.scss';

const cx = classNames.bind(styles);

function SearchPage() {
    const [isShowMovieDetails, setIsShowMovieDetails] = useState(false);
    const [movies, setMovies] = useState();

    const movieDetails = useSelector((state) => state.movie.details);
    const searchValue = useSelector((state) => state.search);

    useEffect(() => {
        setIsShowMovieDetails(movieDetails ? true : false);
    }, [movieDetails]);

    useEffect(() => {
        setMovies(searchValue.result.results);
    }, [searchValue.result.results]);

    return (
        <div className={cx('wrapper')}>
            <MovieGrid>
                {movies &&
                    movies.length > 0 &&
                    movies.map((movie, index) => {
                        let imageUrl = `https://image.tmdb.org/t/p/original/${
                            movie.poster_path || movie.backdrop_path
                        }`;
                        if (movie.poster_path === null) {
                            imageUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path || movie.poster_path}`;
                        }
                        return <ListItem key={index} data={movie} imageUrl={imageUrl} />;
                    })}
            </MovieGrid>
            {typeof movieDetails === 'object' && movieDetails !== null ? (
                <MovieDetails showModal={isShowMovieDetails} movie={movieDetails} />
            ) : (
                ''
            )}
        </div>
    );
}

export default SearchPage;
