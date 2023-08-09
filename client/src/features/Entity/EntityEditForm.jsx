import React from 'react'
import { useParams } from 'react-router-dom'

const EntityEditForm = () => {
    const { id } = useParams()


    return (
        <div>EntityEditForm {id}</div>
    )
}

export default EntityEditForm