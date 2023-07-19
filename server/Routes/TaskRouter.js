import { Router } from 'express';
const router = Router();
import { getAllTask, createTask, getTask, updateTask, deleteTask } from '../Controllers/TaskController.js';


router.get('/', getAllTask);
router.get('/:id', getTask)
router.post('/', createTask);
router.put("/:id", updateTask); // explanation why we use put instead of post if it does achive the same
// thing  is because for clarity or like convention 
// put should be "idempotent" post is not
// meaning no matter how many times you run put request it wont change anything like when clicking a button it will open a door on second click it will do nothing just open the door
// meanwhile post will do something different in second "button" click it could close the door or insert another document in this context
// delete should be indempotent too 
router.delete("/:id", deleteTask);

export default router;