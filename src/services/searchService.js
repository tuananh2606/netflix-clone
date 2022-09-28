import * as httpRequest from '~/utils/httpRequest';

export const search = async (request, q) => {
    try {
        const res = await httpRequest.get(request, {
            params: {
                language: 'en-US',
                query: `${q}`,
                page: 1,
                include_adult: 'false',
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
