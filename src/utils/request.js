const API_KEY = 'dfc861413c4bcb92717c98ba8d0b4338';

const request = {
    requestSearchMovies: `/search/movie?api_key=${API_KEY}`,
    requestPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    requestNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    requestTrendingMovies: `/trending/all/week?api_key=${API_KEY}`,
    requestTopRatedMovies: `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    requestUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    requestComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    requestHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
};

export default request;
