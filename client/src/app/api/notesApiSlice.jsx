import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createEntityAdapter } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";


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
        getOneNote: builder.query({
            query: (id) => ({
                url: `tasks/${id}`,
                method: "GET"
            }),
        }),
        deleteNote: builder.mutation({
            query: (id) => ({
                url: `tasks/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ['Tasks']
        }),
        addNote: builder.mutation({
            query: (initialData) => ({
                url: 'tasks',
                method: 'POST',
                body: {
                    ...initialData
                },
            }),
            invalidatesTags: ['Tasks']
        }),
        updateNote: builder.mutation({
            query: (initialUserData) => ({
                url: `/tasks/${initialUserData.id}`,
                method: 'PUT',
                body: {
                    ...initialUserData,
                }
            }),
            invalidatesTags: ['Tasks']
        }),

    })
})


export const {
    useGetAllNotesQuery,
    useDeleteNoteMutation,
    useAddNoteMutation,
    useUpdateNoteMutation,
    useGetOneNoteQuery
} = notesApi
