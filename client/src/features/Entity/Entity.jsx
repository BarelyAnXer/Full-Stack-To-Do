import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useDeleteNoteMutation } from '../../app/api/notesApiSlice';
import { useNavigate } from 'react-router-dom';

const Entity = ({ entity }) => {
  const { _id, title, body, completed } = entity
  const [deleteNote, { isLoading }] = useDeleteNoteMutation();
  const navigate = useNavigate()

  if (isLoading) {
    return <p>loading ...</p>
  }

  return (
    <>
      <tr>
        <td>{_id}</td>
        <td>{title}</td>
        <td>{body}</td>
        <td>
          <Link to={`/notes/${_id}`}>
            <FaEdit />
          </Link>
          <button onClick={async () => {
            await deleteNote(_id);
          }}>
            <FaTrash />
          </button>
        </td>
      </tr>

    </>
  )
}

export default Entity   