import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const notesApi = createApi({
    reducerPath: "notesApi",
    tagTypes: ['Tasks'],
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    endpoints: (builder) => ({
        getAllNotes: builder.query({
            query: () => "tasks",
            providesTags: ['Tasks']
            // query: (limit = 10) => `todos?_limit=${limit}`,

        }),
        deleteNote: builder.mutation({
            query: (id) => ({
                url: `tasks/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ['Tasks']
        }),

    })
})


export const { useGetAllNotesQuery, useDeleteNoteMutation } = notesApi