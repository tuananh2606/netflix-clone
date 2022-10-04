import * as httpRequest from '~/utils/httpRequest';

export const getMovies = async (request, p) => {
    try {
        const res = await httpRequest.get(request, {
            params: {
                page: p,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
