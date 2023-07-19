import express from 'express';
import cors from 'cors';
import connectDB from './utils/database.js';

import taskRoutes from './Routes/TaskRouter.js';

const app = express()
app.use(cors())
app.use(express.json())
const PORT = 3000


connectDB();

app.get('/', (req, res) => {
  res.send('test')
})

app.use('/tasks', taskRoutes)


app.listen(PORT, (error) => {
  console.log(`Example app listening on port ${PORT}`)
})