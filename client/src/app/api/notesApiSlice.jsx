import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const notesApi = createApi({
    reducerPath: "notesApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
    endpoints: (builder) => ({
        getAllNotes: builder.query({
            query: () => "todos"
        }),

    })
})


export const { useGetAllNotesQuery } = notesApi