# **Data Flow Diagram (DFD) for To-Do App**

## **1. Level 0 DFD (Context Diagram)**
At this level, we represent the entire system as a single process, showing the flow of data between the system and external entities.

### **Diagram Representation:**
```
+------------+        +----------------+        +----------------+
|    User    | ----> |   To-Do App    | ----> | Task Database  |
+------------+        +----------------+        +----------------+
                                  |                         |
                                  v                         v
                       +------------------+      +----------------+
                       | Task Display UI  | <--- | Fetch Tasks    |
                       +------------------+      +----------------+
```
### **Explanation:**
- **User** interacts with the system to add, update, complete, or delete tasks.
- **To-Do App** processes the user’s actions.
- **Task Database** stores all tasks persistently.
- **Task Display UI** updates based on user actions and database responses.

---

## **2. Level 1 DFD (Breakdown of To-Do App Process)**
Here, we break down the main **To-Do App** process into its sub-processes.

### **Diagram Representation:**
```
+------------+       +----------------------+       +----------------+
|    User    | ---> | 1.0 Handle User Input | ---> | Process Task   |
+------------+       +----------------------+       +----------------+
                                  |                         |
                                  v                         v
                      +---------------------+       +------------------+
                      | 2.0 Manage Tasks    | ----> | 3.0 Store in DB  |
                      +---------------------+       +------------------+
                                  |
                                  v
                      +---------------------+
                      | 4.0 Display Tasks   |
                      +---------------------+
```
### **Explanation:**
1. **Handle User Input (Process 1.0):**
   - Users input new tasks, edit existing ones, mark tasks as complete, or delete tasks.

2. **Manage Tasks (Process 2.0):**
   - The system validates input and checks for duplicate or invalid entries.

3. **Store in Database (Process 3.0):**
   - Tasks are stored, updated, or removed in the database.

4. **Display Tasks (Process 4.0):**
   - The updated list of tasks is displayed to the user.

---

## **3. Level 2 DFD (Detailed Breakdown of Each Process)**

### **1. Handle User Input (Process 1.0)**
```
+------------+       +----------------------+       +------------------+
|    User    | ---> | 1.1 Capture Task     | ---> | Validate Input   |
+------------+       +----------------------+       +------------------+
```
- Captures input and validates it.

### **2. Manage Tasks (Process 2.0)**
```
+------------------+       +----------------------+
| Validate Input  | ---> | 2.1 Process Actions  |
+------------------+       +----------------------+
```
- Ensures data integrity before updating the database.

### **3. Store in Database (Process 3.0)**
```
+---------------------+       +----------------------+
| 2.1 Process Actions | ---> | 3.1 Update Database |
+---------------------+       +----------------------+
```
- Updates the task database accordingly.

### **4. Display Tasks (Process 4.0)**
```
+---------------------+       +---------------------+
| Fetch Tasks from DB | ---> | 4.1 Render UI      |
+---------------------+       +---------------------+
```
- Fetches and displays tasks in the UI.

---

## **Conclusion**
- This **DFD** outlines the **To-Do App’s** data flow and task management process.
- This document should be included in the project repository under `docs/DFD.md` for reference.



