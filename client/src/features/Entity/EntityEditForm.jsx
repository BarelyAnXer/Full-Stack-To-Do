import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { useGetOneNoteQuery } from '../../app/api/notesApiSlice';
import { useSelector } from 'react-redux';
import { selectNoteById } from '../../app/api/notesApiSlice';

const EntityEditForm = () => {
    const { id } = useParams();
    const noteById = useSelector((state) => selectNoteById(state, id))

    console.log(noteById)

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    // useEffect(() => {
    //     if (data) {
    //         setTitle(data.title);
    //         setBody(data.body);
    //     }
    // }, [data]);

    // if (isError) {
    //     return <p>Error...</p>;
    // }
    // if (isLoading) {
    //     return <p>Loading...</p>;
    // }

    return (
        <>
            {/* <div>EntityEditForm {id}</div>
            <pre>{JSON.stringify(data, null, 2)}</pre>

            <label htmlFor="title">Title:</label>
            <input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} />

            <label htmlFor="body">Body:</label>
            <input id="body" value={body} onChange={(event) => setBody(event.target.value)} /> */}
        </>
    );
};

export default EntityEditForm;
