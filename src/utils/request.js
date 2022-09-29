const request = {
    requestSearchMovies: `/search/movie?api_key=${process.env.REACT_APP_IMDB_API_KEY}`,
    requestPopular: `/movie/popular?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US&page=1`,
    requestNetflixOriginals: `/discover/tv?api_key=${process.env.REACT_APP_IMDB_API_KEY}&with_networks=213`,
    requestTrendingMovies: `/trending/all/week?api_key=${process.env.REACT_APP_IMDB_API_KEY}`,
    requestTopRatedMovies: `movie/top_rated?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US&page=1`,
    requestUpcomingMovies: `/movie/upcoming?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US&page=1`,
    requestComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_IMDB_API_KEY}&with_genres=35`,
    requestHorrorMovies: `/discover/movie?api_key=${process.env.REACT_APP_IMDB_API_KEY}&with_genres=27`,
};

export default request;
