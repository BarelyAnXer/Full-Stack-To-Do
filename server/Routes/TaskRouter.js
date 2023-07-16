import { Router } from 'express';
const router = Router();
import { getAllTasks, createTask } from '../Controllers/TaskController.js';

router.get('/', getAllTasks);
router.post('/', createTask);

export default router;