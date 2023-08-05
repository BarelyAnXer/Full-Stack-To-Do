import React from 'react'

const Temp = () => {
    const [tasks, setTasks] = useState([])
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const insertTask = async () => {
        try {
            const response = await axios.post("http://localhost:3000/tasks/", { title, body })
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const tester = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/tasks/64b4e280b0d4814896deee31`)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const getTasks = async () => {
            let temp = await axios.get("http://localhost:3000/tasks/")
            setTasks(temp.data.data)
        }

        getTasks()

    }, [])

    return (
        <>
            <label>title</label>
            <input type="text" onChange={(event) => setTitle(event.target.value)} value={title} /><br />
            <label>body</label>
            <input type="text" onChange={(event) => setBody(event.target.value)} value={body} /><br />

            <button onClick={insertTask}>insert</button>
            <button onClick={tester}>tester</button>
            <br />
            {tasks?.map((task) => {
                return (
                    <div key={task._id}>
                        <h3>{task.title}</h3>
                        <p>{task.body}</p>
                        <p>{task._id}</p>
                    </div>
                )
            })}


        </>
    )
}

export default Temp