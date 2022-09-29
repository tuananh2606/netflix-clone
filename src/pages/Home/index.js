import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import request from '~/utils/request';
import SlideList from '~/components/SlideList';
import VideoFeatured from '~/components/VideoFeatured';
import MovieDetails from '~/components/MovieDetails';

function Home() {
    const [isShowMovieDetails, setIsShowMovieDetails] = useState(false);
    const movieDetails = useSelector((state) => state.movie.details);
    useEffect(() => {
        setIsShowMovieDetails(movieDetails ? true : false);
    }, [movieDetails]);

    return (
        <div>
            <VideoFeatured />
            <SlideList fetchURL={request.requestTrendingMovies} heading="Trending Movies" />
            <SlideList fetchURL={request.requestUpcomingMovies} heading="Upcoming Movies" />
            <SlideList fetchURL={request.requestNetflixOriginals} heading="Netflix Originals" />
            <SlideList fetchURL={request.requestPopular} heading="Popular Movies" />
            <SlideList fetchURL={request.requestTopRatedMovies} heading="Top Rated Movies" />
            <SlideList fetchURL={request.requestComedyMovies} heading="Comedy Movies" />
            <SlideList fetchURL={request.requestHorrorMovies} heading="Horror Movies" />
            {typeof movieDetails === 'object' && movieDetails !== null ? (
                <MovieDetails showModal={isShowMovieDetails} movie={movieDetails} />
            ) : (
                ''
            )}
        </div>
    );
}

export default Home;
