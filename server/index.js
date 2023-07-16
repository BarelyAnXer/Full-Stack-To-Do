import express from 'express';
import cors from 'cors';
import connectDB from './utils/database.js';


const app = express()
app.use(cors())
const PORT = 3000


connectDB();

app.get('/', (req, res) => {
  res.send('test')
})
import taskRoutes from './Routes/TaskRouter.js';
app.use('/tasks', taskRoutes)


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})