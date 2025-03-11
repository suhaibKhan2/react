# **Data Flow Diagram (DFD) for Simple Form Handling Project**

## **1. Level 0 DFD (Context Diagram)**

At this level, we represent the entire system as a **single process**, showing the flow of data between the system and external entities.

### **Diagram Representation:**
```
+-------------------+       +-----------------------+       +--------------------+
|       User       | ----> |  Simple Form System  | ----> |  Form Submission  |
+-------------------+       +-----------------------+       +--------------------+
```

### **Explanation:**
- **User** fills out the form and submits the data.
- The **Simple Form System** processes the input and performs validation.
- The **Form Submission** stores data in the database or provides feedback to the user.

---

## **2. Level 1 DFD (Decomposition of Simple Form System)**

This level breaks down the **Simple Form System** into key processes:

1. **User Input Handling**
2. **Validation & Processing**
3. **Data Storage & Response**

### **Diagram Representation:**
```
+-------------------+       +--------------------------+       +-------------------+
|       User       | ----> | 1.0 Capture User Input   | ----> | Validate Input    |
+-------------------+       +--------------------------+       +-------------------+
                                      |                                         |
                                      v                                         v
                            +----------------------+       +----------------------+
                            | 2.0 Process Form    | ----> | Store Data in DB     |
                            +----------------------+       +----------------------+
                                      |
                                      v
                            +----------------------+       +----------------+
                            | 3.0 Send Response   | ----> | Display Message |
                            +----------------------+       +----------------+
```

### **Explanation:**

1. **Capture User Input (Process 1.0):**
   - The user enters details (e.g., name, email, password, etc.) and submits the form.
   - The input is captured and forwarded for validation.

2. **Validate & Process Input (Process 2.0):**
   - The system checks if the entered values meet required criteria (e.g., required fields, format checks, etc.).
   - If validation passes, the data is processed and stored in the database.
   - If validation fails, an error message is generated.

3. **Send Response (Process 3.0):**
   - A success message is displayed if the form is submitted successfully.
   - An error message is displayed if validation fails.

---

## **3. Level 2 DFD (Detailed Breakdown of Each Process)**

### **1. Capture User Input (Process 1.0)**
```
+-------------------+       +--------------------------+       +----------------+
|       User       | ----> | 1.1 Enter Form Details   | ----> | Click Submit   |
+-------------------+       +--------------------------+       +----------------+
```
- The system listens for user input and submits the form when the user clicks the submit button.

### **2. Validate & Process Input (Process 2.0)**
```
+-------------------+       +----------------------+       +-------------------+
|  Click Submit   | ----> | 2.1 Validate Input   | ----> | Process Data     |
+-------------------+       +----------------------+       +-------------------+
```
- The system checks input validity and processes valid data.

### **3. Store Data & Send Response (Process 3.0)**
```
+-------------------+       +----------------------+       +----------------+
|  Process Data   | ----> | 3.1 Store in DB      | ----> | Send Response  |
+-------------------+       +----------------------+       +----------------+
```
- If data is valid, it is stored in the database, and a response is sent to the user.

---

## **Conclusion**

- This **DFD** outlines the **Simple Form Handling Project's** data flow from user input to form submission.
- This document should be included in the project repository under `docs/DFD.md` for reference.

---





