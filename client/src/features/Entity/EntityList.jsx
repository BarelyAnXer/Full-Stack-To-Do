import React from 'react'
import { useGetAllNotesQuery } from '../../app/api/notesApiSlice'
import Entity from './Entity'

const EntityList = () => {

  const { data: notes, isError, isLoading } = useGetAllNotesQuery()

  if (isLoading) {
    return <h1>Loading</h1>
  }

  if (isError) {
    return <h1>Error</h1>
  }

  return (
    <>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {notes.data.map((entity) => {
            return <Entity key={entity._id} entity={entity}/>
          })}
          
          {/* {notes.map((entity) => {
            return <Entity key={entity.id} entity={entity}/>
          })} */}
          
        </tbody>
        <tfoot>
          <tr>
            <th>pagination?</th>
          </tr>
        </tfoot>
      </table>

    </>
  )
}

export default EntityList    