# **Data Flow Diagram (DFD) for Basic Counter App**

## **1. Level 0 DFD (Context Diagram)**

At this level, we represent the entire system as a **single process**, showing the flow of data between the system and external entities.

### **Diagram Representation:**

```
+-------------------+       +--------------------+
|   User           | ----> |  Counter App       |
+-------------------+       +--------------------+
                                    |
                                    v
                            +----------------+
                            |  Counter Value |
                            +----------------+
```

### **Explanation:**

- **User** interacts with the **Counter App**.
- The system processes the user’s interactions (increment, decrement, reset).
- The **Counter Value** is updated accordingly.

---

## **2. Level 1 DFD (Decomposition of Counter App)**

This level breaks down the **Counter App** into key processes:

1. **Increment Counter**
2. **Decrement Counter**
3. **Reset Counter**

### **Diagram Representation:**

```
+-------------------+       +-------------------------+
|       User       | ----> | 1.0 Increment Counter  |
+-------------------+       +-------------------------+
                                    |
                                    v
                            +----------------+
                            |  Counter Value |
                            +----------------+

+-------------------+       +-------------------------+
|       User       | ----> | 2.0 Decrement Counter  |
+-------------------+       +-------------------------+
                                    |
                                    v
                            +----------------+
                            |  Counter Value |
                            +----------------+

+-------------------+       +----------------------+
|       User       | ----> | 3.0 Reset Counter   |
+-------------------+       +----------------------+
                                    |
                                    v
                            +----------------+
                            |  Counter Value |
                            +----------------+
```

### **Explanation:**

1. **Increment Counter (Process 1.0):**
   - User clicks the increment button.
   - Counter value is increased by **+1**.

2. **Decrement Counter (Process 2.0):**
   - User clicks the decrement button.
   - Counter value is decreased by **-1**.

3. **Reset Counter (Process 3.0):**
   - User clicks the reset button.
   - Counter value is reset to **0**.

---

## **3. Level 2 DFD (Detailed Breakdown)**

### **Increment Counter (Process 1.0)**

```
+-------------------+       +----------------------------+
|       User       | ----> | 1.1 Click Increment Button |
+-------------------+       +----------------------------+
                                    |
                                    v
                            +----------------------+
                            | 1.2 Update Counter  |
                            +----------------------+
                                    |
                                    v
                            +----------------+
                            |  Counter Value |
                            +----------------+
```

### **Decrement Counter (Process 2.0)**

```
+-------------------+       +----------------------------+
|       User       | ----> | 2.1 Click Decrement Button |
+-------------------+       +----------------------------+
                                    |
                                    v
                            +----------------------+
                            | 2.2 Update Counter  |
                            +----------------------+
                                    |
                                    v
                            +----------------+
                            |  Counter Value |
                            +----------------+
```

### **Reset Counter (Process 3.0)**

```
+-------------------+       +----------------------+
|       User       | ----> | 3.1 Click Reset Button |
+-------------------+       +----------------------+
                                    |
                                    v
                            +----------------+
                            |  Counter Value |
                            +----------------+
```

### **Explanation:**

1. **Increment Counter:**
   - User clicks the **Increment** button.
   - Counter value increases and is displayed.

2. **Decrement Counter:**
   - User clicks the **Decrement** button.
   - Counter value decreases and is displayed.

3. **Reset Counter:**
   - User clicks the **Reset** button.
   - Counter value resets to **0**.

---

## **Conclusion**

- This **DFD** outlines the **Basic Counter App's** data flow from user interaction to counter updates.
- This document should be included in the project repository under `docs/DFD.md` for reference.

---

## **Next Steps**

1. **Create a `docs/` folder in your project.**
2. **Save this file as `DFD.md` inside `docs/`.**
3. **Push to GitHub:**
 
   

