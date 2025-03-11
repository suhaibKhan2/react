# **Data Flow Diagram (DFD) for React Login App**

## **1. Level 0 DFD (Context Diagram)**

At this level, we represent the entire system as a **single process**, showing the flow of data between the system and external entities.

### **Diagram Representation:**

```
+-------------------+       +---------------------------+       +------------------+
|       User       | ----> |    React Login App     | ----> |   Authentication  |
+-------------------+       +---------------------------+       +------------------+
```

### **Explanation:**
- **User** enters login credentials (username & password).
- The **React Login App** processes the input and communicates with the authentication system.
- Authentication is performed, and the result (success or failure) is returned to the user.

---

## **2. Level 1 DFD (Decomposition of React Login App System)**

This level breaks down the **React Login App** into key processes:

1. **User Input Processing**
2. **Authentication Handling**
3. **Response Handling**

### **Diagram Representation:**

```
+-------------------+       +-------------------------+       +--------------------+
|       User       | ----> | 1.0 User Input Handling | ----> | Validate Input Data |
+-------------------+       +-------------------------+       +--------------------+
                                       |                                       |
                                       v                                       v
                             +----------------------+       +----------------------+
                             | 2.0 Authenticate User | ----> | Check Credentials  |
                             +----------------------+       +----------------------+
                                       |
                                       v
                             +----------------------+       +------------------+
                             | 3.0 Response Handling | ----> | Return Status   |
                             +----------------------+       +------------------+
```

### **Explanation:**

1. **User Input Handling (Process 1.0):**
   - The user enters login details in the form.
   - The system validates the input fields (e.g., non-empty fields, valid email format).

2. **Authentication Handling (Process 2.0):**
   - The validated data is sent to the authentication server.
   - The system checks the credentials against the database.

3. **Response Handling (Process 3.0):**
   - If credentials are correct, the user is logged in.
   - If authentication fails, an error message is displayed.

---

## **3. Level 2 DFD (Detailed Breakdown of Each Process)**

### **1. User Input Handling (Process 1.0)**

```
+-------------------+       +-------------------------+       +------------------+
|       User       | ----> | 1.1 Enter Login Details | ----> | Validate Fields  |
+-------------------+       +-------------------------+       +------------------+
```

- User enters email and password.
- The system checks for empty fields and invalid formats.

### **2. Authentication Handling (Process 2.0)**

```
+-------------------+       +------------------------+       +---------------------+
|  Validated Data  | ----> | 2.1 Send to Server    | ----> | Verify Credentials  |
+-------------------+       +------------------------+       +---------------------+
```

- The system sends the validated login credentials to the authentication server.
- The credentials are verified in the database.

### **3. Response Handling (Process 3.0)**

```
+---------------------+       +----------------------+       +------------------+
| Authentication  | ----> | 3.1 Send Response    | ----> | Display Message |
+---------------------+       +----------------------+       +------------------+
```

- If authentication is successful, a success message is displayed, and the user is redirected.
- If authentication fails, an error message is shown.

---

## **Conclusion**

- This **DFD** outlines the **React Login App project's** data flow from input to authentication and response handling.
- This document should be included in the project repository under `docs/DFD.md` for reference.

---

## **Next Steps**

1. **Create a `docs/` folder in your project.**
2. **Save this file as `DFD.md` inside `docs/`.**
3. **Push to GitHub:**


