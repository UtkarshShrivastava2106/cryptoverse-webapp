import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoHeaders={

      
         'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
         'x-rapidapi-key': 'e51362e0abmshe3d13eaa2ea870cp1e1529jsndd1c07eccb38'
      

}
const baseUrl='https://coinranking1.p.rapidapi.com';
const createRequest=(url)=>({url,headers:cryptoHeaders})


export const cryptoApi= createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptos:builder.query({
            query:(count)=>createRequest("/coins")
        }),
        getCryptoDetails:builder.query({
            query:(coinId)=>createRequest("/coin")
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
          }),
        getCryptoExchanges: builder.query({
            query: () => createRequest(`/exchanges`),
          }),

    })
});
export const  {
    useGetCryptosQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery,useGetExchangesQuery
}=cryptoApi;
