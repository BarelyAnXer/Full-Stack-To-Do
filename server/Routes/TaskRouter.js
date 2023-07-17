import { Router } from 'express';
const router = Router();
import { getAllTask, createTask, getTask, updateTask, deleteTask } from '../Controllers/TaskController.js';


router.get('/', getAllTask);
router.get('/:id', getTask)
router.post('/', createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;