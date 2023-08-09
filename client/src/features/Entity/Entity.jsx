import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Entity = ({ entity }) => {
  const { id, title, completed } = entity
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{String(completed)}</td>
        <td>
          <Link to={`/notes/${id}`}>
            <FaEdit />
          </Link>

        </td>
      </tr>

    </>
  )
}

export default Entity   