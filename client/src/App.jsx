import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"



function App() {
  const [tasks, setTasks] = useState([])



  useEffect(() => {
    
    const click = async () => {
      let temp = await axios.get("http://localhost:3000/tasks/")
      setTasks(temp.data)
      console.log(temp.data)
    }

    click()

  }, [])
  



  return (
    <>
      <button >click</button>
      <br />
      {
        tasks?.map((task) => {
          return <p key={task.id}>{task._id}</p>
        })
      }


    </>
  )
}

export default App
