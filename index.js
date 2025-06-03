const express = require('express');
const morgan = require('morgan');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3000;

pp.use(express.json());
app.use(morgan('dev'));

let tasks = [];
app.get('/tasks', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedTasks = tasks.slice(start, end);

  
   res.status(200).json({
    total: tasks.length,
    page,
    totalPages: Math.ceil(tasks.length / limit),
    tasks: paginatedTasks,
  });
}
);

app.get('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });

  res.status(200).json(task);
});

app.post('/tasks', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description)
    return res.status(400).json({ error: 'Title and description are required' });

  const newTask = {
    id: uuidv4(),
    title,
    description,
    createdAt: new Date().toISOString(),
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});
app.put('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });

  
  const { title, description } = req.body;
  if (!title || !description)
    return res.status(400).json({ error: 'Title and description are required' });
  task.title = title;
  task.description = description;


  res.status(200).json(task);
}
);

app.delete('/tasks/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Task not found' });
  tasks.splice(index, 1);
  res.status(200).json({ message: 'Task deleted successfully' });
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
}
);
