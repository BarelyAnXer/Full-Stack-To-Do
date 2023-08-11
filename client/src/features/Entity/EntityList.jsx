import { useState } from "react"
import { useGetAllNotesQuery, useAddNoteMutation } from '../../app/api/notesApiSlice'
import Entity from './Entity'

const EntityList = () => {

  const { data: notes, isError, isLoading } = useGetAllNotesQuery()
  // const [addNote, { isLoading, isSuccess, isError, error }] = useAddNoteMutation()
  const [addNote] = useAddNoteMutation()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const onSaveUserClicked = async (event) => {
    event.preventDefault();
    console.log(title, body, "asdsd")
    await addNote({ title, body })
  }

  if (isLoading) {
    return <h1>Loading</h1>
  }

  if (isError) {
    return <h1>Error</h1>
  }

  return (
    <>


      <form className="form" onSubmit={onSaveUserClicked}>
        <button
          className="icon-button"
          title="Save"
        >
          {/* icon */} asd
        </button>

        <label>Username:</label>
        <input
          id="username"
          name="username"
          type="text"
          autoComplete="off"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <label>Username:</label>
        <input
          id="body"
          name="body"
          type="text"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />



      </form>

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
            return <Entity key={entity._id} entity={entity} />
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