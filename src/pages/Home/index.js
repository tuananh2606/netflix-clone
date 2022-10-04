import request, { category } from '~/utils/request';
import SlideList from '~/components/SlideList';
import VideoFeatured from '~/components/VideoFeatured';

function Home() {
    return (
        <div>
            <VideoFeatured />
            <SlideList fetchURL={request.requestTrendingMovies} heading="Trending Movies" category={category.movie} />
            <SlideList fetchURL={request.requestUpcomingMovies} heading="Upcoming Movies" category={category.movie} />
            <SlideList fetchURL={request.requestNetflixOriginals} heading="Netflix Originals" category={category.tv} />
            <SlideList fetchURL={request.requestPopular} heading="Popular Movies" category={category.movie} />
            <SlideList fetchURL={request.requestTopRatedMovies} heading="Top Rated Movies" category={category.movie} />
            <SlideList fetchURL={request.requestComedyMovies} heading="Comedy Movies" category={category.movie} />
            <SlideList fetchURL={request.requestHorrorMovies} heading="Horror Movies" category={category.movie} />
        </div>
    );
}

export default Home;
