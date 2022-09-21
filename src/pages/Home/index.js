import request from '~/utils/request';
import SlideList from '~/components/SlideList';
import VideoFeatured from '~/components/VideoFeatured';

function Home() {
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
        </div>
    );
}

export default Home;
