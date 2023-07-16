import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const taskSchema = new Schema({
    title: String,
    body: String,
    date: { type: Date, default: Date.now },
});

const Task = model('Task', taskSchema);

export default Task;