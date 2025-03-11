# **Data Flow Diagram (DFD) for User Authentication System**

## **1. Level 0 DFD (Context Diagram)**
At this level, we represent the entire **User Authentication System** as a single process interacting with external entities.

### **Diagram Representation:**
```
+-------------------+       +------------------------------+       +--------------------+
|       User       | ----> |  User Authentication System  | ----> |  Authentication Status  |
+-------------------+       +------------------------------+       +--------------------+
```

### **Explanation:**
- **User** enters credentials (username and password).
- The **User Authentication System** processes the request and verifies credentials.
- The system responds with **Authentication Status** (Success/Failure).

---

## **2. Level 1 DFD (Decomposition of User Authentication System)**

Breaking down the **User Authentication System** into its core processes:

### **Diagram Representation:**
```
+-------------------+       +----------------------+       +------------------+
|       User       | ----> | 1.0 Capture Input    | ----> |  Validate Input  |
+-------------------+       +----------------------+       +------------------+
                                      |                                        |
                                      v                                        v
                            +----------------------+       +---------------------+
                            | 2.0 Check Database  | ----> |  Generate Response  |
                            +----------------------+       +---------------------+
                                      |
                                      v
                            +---------------------+       +------------------+
                            | 3.0 Return Status  | ----> | Display to User |
                            +---------------------+       +------------------+
```

### **Explanation:**
1. **Capture Input (Process 1.0):**
   - User enters credentials (username & password).
   - Data is sent for validation.

2. **Validate Input (Process 1.1):**
   - Ensures credentials are formatted correctly (no empty fields, valid email, etc.).

3. **Check Database (Process 2.0):**
   - Queries **User Database** to verify credentials.
   - If credentials match, authentication is successful.
   - If not, access is denied.

4. **Generate Response (Process 2.1):**
   - If valid, create a session token or JWT (JSON Web Token).
   - If invalid, return an error message.

5. **Return Status (Process 3.0):**
   - Sends authentication success or failure response.
   - Redirects the user accordingly.

6. **Display to User (Process 3.1):**
   - If login is successful, user is redirected to the dashboard.
   - If login fails, an error message is displayed.

---

## **3. Level 2 DFD (Detailed Breakdown of Each Process)**

### **1. Validate Input (Process 1.1)**
```
+-------------------+       +----------------------+       +----------------+
| User Credentials | ----> | 1.1 Check Format     | ----> |  Validate Data  |
+-------------------+       +----------------------+       +----------------+
```
- Ensures valid email format, non-empty fields, and strong passwords.

### **2. Check Database (Process 2.0)**
```
+-------------------+       +----------------------+       +----------------+
|  Validate Data   | ----> | 2.1 Query Database   | ----> | Compare Hash  |
+-------------------+       +----------------------+       +----------------+
```
- Uses **bcrypt** or another hashing mechanism to verify passwords.

### **3. Generate Response (Process 2.1)**
```
+-------------------+       +----------------------+       +----------------+
| Compare Hash    | ----> | 2.2 Generate Token   | ----> | Return Response |
+-------------------+       +----------------------+       +----------------+
```
- Generates JWT or session token if authentication succeeds.
- Returns an error response if authentication fails.

---

## **Conclusion**
- This **DFD** outlines the **User Authentication System’s** data flow from user input to authentication response.
- This document should be included in the project repository under `docs/DFD.md` for reference.



