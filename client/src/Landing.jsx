import React from 'react'
import { useGetAllNotesQuery } from './app/api/notesApiSlice'

const Testing = () => {
  const { data, u, isLoading } = useGetAllNotesQuery()


  if (isLoading) {
    return <h1>Loading</h1>
  }

  if (isError) {
    return <h1>Error</h1>
  }


  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Testing  