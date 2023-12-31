import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { notesApi } from "./api/notesApiSlice"

export const store = configureStore({
    reducer: {
        [notesApi.reducerPath]: notesApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(notesApi.middleware),
})

setupListeners(store.dispatch)