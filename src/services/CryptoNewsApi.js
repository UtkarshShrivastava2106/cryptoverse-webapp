import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders=
{
 
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'e51362e0abmshe3d13eaa2ea870cp1e1529jsndd1c07eccb38'

}


const baseUrl='https://bing-news-search1.p.rapidapi.com';
const createRequest=(url)=>({url,headers:cryptoNewsHeaders})

export const CryptoNewsApi=createApi({
    reducerPath: 'CryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews: builder.query({
            query: ({ newsCategory }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day`),

        })
    })
});
export const {
    useGetCryptoNewsQuery
}=CryptoNewsApi;