

1. Start Server
   Run in terminal:  
   node yourfilename.js
  

2. Open Postman 
   New tab → choose method → enter URL.



 API Endpoints :-

Create Task :
- POST :  `http://localhost:3000/tasks`  
- Body → raw → JSON:
  json
  {
    "title": "Task 1",
    "description": "Test task"
  }
 

 Get All Tasks :
- GET:  `http://localhost:3000/tasks`  
 

 Get Task by ID :
- GET : `http://localhost:3000/tasks/{id}`

 Update Task:
- PUT :-`http://localhost:3000/tasks/{id}`  
- Body → raw → JSON:
  json
  {
    "title": "Updated",
    "description": "Updated desc"
  }
  

 Delete Task
- DELETE- `http://localhost:3000/tasks/{id}`


 
