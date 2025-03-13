# Learning Management System - Data Flow Diagrams

## Level 0 DFD (Context Diagram)
The Level 0 Data Flow Diagram (DFD) provides an overview of how users interact with the Learning Management System (LMS). The system serves as an intermediary between users and the database, processing requests and responses.

### **Entities & Processes:**
- **Users (Students, Instructors, Admins)**: Interact with the LMS to manage courses, access learning materials, and update personal information.
- **LMS API**: The central system that handles requests, processes data, and communicates with the database.
- **Database**: Stores information about users, courses, books, and other learning resources.

#### **Data Flow:**
1. Users send requests (login, view courses, add books, etc.) to the LMS API.
2. The LMS API processes the request and retrieves or updates data in the database.
3. The system returns a response to the user (success/failure messages, requested data, etc.).

### **Level 0 DFD Diagram:**
```
+---------------------+          +------------------+          +----------------+
|     Users          |  ----->  |      LMS API     |  ----->  |   Database     |
| (Students, Admins) |          | (Handles logic)  |          | (Stores Data)  |
+---------------------+          +------------------+          +----------------+
       |                                  |                            |
       |                                  |                            |
       v                                  v                            v
+---------------------+          +------------------+          +----------------+
|  User Requests     |  <-----  |   API Responses  |  <-----  |  Data Retrieval |
+---------------------+          +------------------+          +----------------+
```

---

## Level 1 DFD (Detailed Data Flow)
The Level 1 DFD expands on the LMS API and its interactions with users and the database. This level details how API endpoints process data for different functionalities.

### **Processes & Data Flow:**
1. **User Authentication & Management**
   - Users send login/signup requests to the LMS API.
   - The system validates credentials and retrieves user details from the database.
   - A session token is generated and returned to the user.

2. **Course Management**
   - Users (instructors/admins) can add, update, or delete courses.
   - Students can view course details.
   - The API fetches and modifies course data in the database accordingly.

3. **Book Management (CRUD Operations)**
   - Users send requests to add, retrieve, update, or delete books.
   - The LMS API processes these requests and interacts with the database.
   - Responses are sent back to confirm successful operations.

4. **Learning Materials & Content Delivery**
   - Users request access to learning resources.
   - The system retrieves and delivers the requested materials.

5. **Swagger API Documentation & Testing**
   - Developers can test API endpoints using Swagger UI.
   - Requests (GET, POST, PUT, DELETE) are made to verify API functionality.

### **Level 1 DFD Diagram:**
```
+---------------------+          +------------------+          +----------------+
|     Users          |  ----->  |  Authentication  |  ----->  |   Database     |
+---------------------+          +------------------+          +----------------+
       |                          |                            |
       |                          |                            |
       v                          v                            v
+---------------------+  ----->  +------------------+  ----->  +----------------+
|  Course Requests   |          | Course Handling  |          |  Course Data   |
+---------------------+          +------------------+          +----------------+
       |                          |                            |
       |                          |                            |
       v                          v                            v
+---------------------+  ----->  +------------------+  ----->  +----------------+
|  Book Requests     |          |  Book Handling   |          |  Book Data     |
+---------------------+          +------------------+          +----------------+
```

### **Conclusion**
The LMS follows a structured data flow to ensure smooth interaction between users and the database. With well-defined processes for authentication, course management, book management, and API documentation, the system efficiently handles learning resources.



