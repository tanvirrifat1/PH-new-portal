import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getNewses: builder.query({
      query: () => "/api/news",
    }),
    getSingleNews: builder.query({
      query: (id) => `api/news/${id}`,
    }),
  }),
});

export const { useGetNewsesQuery, useGetSingleNewsQuery } = apiSlice;
