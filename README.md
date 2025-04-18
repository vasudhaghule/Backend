

### 1.  Start the Server  
Open your terminal and run:  
```bash
node yourfilename.js
```

---

### 2.  Open Postman  
- Click **New Tab**  
- Select **Method (GET, POST, etc.)**  
- Enter the **URL**  
- Send the request

---

##  API Endpoints

---

###  Create Task  
- **Method**: `POST`  
- **URL**: `http://localhost:3000/tasks`  
- **Body** → raw → **JSON**:
```json
{
  "title": "Task 1",
  "description": "Test task"
}
```

---

###  Get All Tasks  
- **Method**: `GET`  
- **URL**: `http://localhost:3000/tasks`

---

###  Get Task by ID  
- **Method**: `GET`  
- **URL**: `http://localhost:3000/tasks/{id}`

---

###  Update Task  
- **Method**: `PUT`  
- **URL**: `http://localhost:3000/tasks/{id}`  
- **Body** → raw → **JSON**:
```json
{
  "title": "Updated",
  "description": "Updated desc"
}
```

---

###  Delete Task  
- **Method**: `DELETE`  
- **URL**: `http://localhost:3000/tasks/{id}`

---

