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

app.post("/login", (req, res) => {
  const { name, email, password } = req.body;

  // can probably use here the thing ive used before
  if (!name || !email || !password) {
    res.status(400).send({
      "status": "error",
      "message": "Failed to save task",
      "error": "Please add all fields"
    });
  }
  





  

})

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;


})

app.post("/logout", (req, res) => {
  const { name, email, password } = req.body;


})

app.listen(PORT, (error) => {
  console.log(`Example app listening on port ${PORT}`)
})