import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetOneNoteQuery, useUpdateNoteMutation } from '../../app/api/notesApiSlice';
import { useNavigate } from "react-router-dom"

const EntityEditForm = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const { data, isError, isLoading } = useGetOneNoteQuery(id)
    const [updateNote, { isLoading: isUpdateLoading,
        isSuccess: isUpdateSuccess,
        isError: isUpdateError,
        error }] = useUpdateNoteMutation()


    if (isError) {
        return <p>Error...</p>;
    }
    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <div>EntityEditForm {id}</div>
            <pre>{JSON.stringify(data, null, 2)}</pre>

            <label htmlFor="title">Title:</label>
            <input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} />

            <label htmlFor="body">Body:</label>
            <input id="body" value={body} onChange={(event) => setBody(event.target.value)} />

            <button onClick={async () => {
                console.log('clicked')
                console.log(title, body)

                await updateNote({ id, title, body })
                setTitle('')
                setBody('')
                navigate('/notes')
            }}>button</button>

        </>
    );
};

export default EntityEditForm;
