# **Data Flow Diagram (DFD) for Simple To-Do List Project**

## **1. Level 0 DFD (Context Diagram)**

At this level, the entire system is represented as a **single process**, showing the interaction between external entities and the system.

### **Diagram Representation:**
```
+-------------------+       +----------------------+       +--------------------+
|       User       | ----> |  To-Do List System  | ----> |  Task Management  |
+-------------------+       +----------------------+       +--------------------+
```

### **Explanation:**
- **User** interacts with the system by adding, editing, deleting, and viewing tasks.
- The **To-Do List System** processes the request and updates the task data.
- The **Task Management** module updates the UI accordingly.

---

## **2. Level 1 DFD (Decomposition of To-Do List System)**

Breaking down the **To-Do List System** into key processes:

1. **User Inputs Task**
2. **Task Processing**
3. **Data Storage & Retrieval**

### **Diagram Representation:**
```
+-------------------+       +--------------------------+       +----------------------+
|       User       | ----> | 1.0 Manage Task Input    | ----> |  Process Task Data  |
+-------------------+       +--------------------------+       +----------------------+
                                        |                                        |
                                        v                                        v
                              +---------------------+       +----------------------+
                              | 2.0 Update Task    | ----> | Store Task in DB    |
                              +---------------------+       +----------------------+
                                        |
                                        v
                              +----------------------+       +------------------+
                              | 3.0 Retrieve Tasks  | ----> | Display to User  |
                              +----------------------+       +------------------+
```

### **Explanation:**

1. **Manage Task Input (Process 1.0):**
   - The user interacts with the UI to **add, edit, or delete** a task.
   - The system captures the request and processes it.

2. **Process Task Data (Process 2.0):**
   - The system updates or removes tasks from the **task database**.
   - The data is stored persistently to ensure updates are retained.

3. **Retrieve Tasks (Process 3.0):**
   - The system fetches existing tasks and displays them to the user.

---

## **3. Level 2 DFD (Detailed Breakdown of Each Process)**

### **1. Manage Task Input (Process 1.0)**
```
+-------------------+       +----------------------+       +----------------+
|       User       | ----> | 1.1 Capture Task     | ----> | Validate Input |
+-------------------+       +----------------------+       +----------------+
```
- Captures user input and validates the task details before processing.

### **2. Process Task Data (Process 2.0)**
```
+-------------------+       +----------------------+       +----------------+
|  Validate Input  | ----> | 2.1 Save Task Data   | ----> | Update Database |
+-------------------+       +----------------------+       +----------------+
```
- The system stores the task in a **database or local storage**.

### **3. Retrieve Tasks (Process 3.0)**
```
+-------------------+       +----------------------+       +----------------+
|  Load Tasks      | ----> | 3.1 Fetch Task Data  | ----> | Display to User |
+-------------------+       +----------------------+       +----------------+
```
- Retrieves saved tasks and displays them in the UI for user interaction.

---

## **Conclusion**

- This **DFD** outlines the **Simple To-Do List Project's** task management and storage process.
- This document should be included in the project repository under `docs/DFD.md` for reference.
