import * as httpRequest from '~/utils/httpRequest';

export const getMovies = async (request) => {
    try {
        const res = await httpRequest.get(request);
        return res;
    } catch (error) {
        console.log(error);
    }
};
