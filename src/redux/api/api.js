import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getNewses: builder.query({
      query: () => "/api/news",
    }),
    getSingleNews: builder.query({
      query: (_id) => `/api/news/${_id}`,
    }),
    // postNews: builder.query({
    //   query: ({ id, data }) => ({
    //     url: `/api/news/${id}`,
    //     method: "POST",
    //     body: data,
    //   }),
    // }),
  }),
});

export const { useGetNewsesQuery, useGetSingleNewsQuery } = apiSlice;
