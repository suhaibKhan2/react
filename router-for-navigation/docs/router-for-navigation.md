# **Data Flow Diagram (DFD) for Router for Navigation Project**

## **1. Level 0 DFD (Context Diagram)**

At this level, we represent the entire system as a **single process**, showing the flow of data between the system and external entities.

### **Diagram Representation:**
```
+-------------------+       +----------------------------+       +--------------------+
|       User       | ----> |  Router Navigation System | ----> |  Rendered Page  |
+-------------------+       +----------------------------+       +--------------------+
```

### **Explanation:**
- **User** interacts with the system by clicking links or entering a URL.
- The **Router Navigation System** processes the request, matches the route, and loads the appropriate component.
- The **Rendered Page** is displayed to the user.

---

## **2. Level 1 DFD (Decomposition of Router Navigation System)**

This level breaks down the **Router Navigation System** into key processes:

1. **User Request Handling**
2. **Route Matching & Processing**
3. **Component Rendering**

### **Diagram Representation:**
```
+-------------------+       +------------------------+       +---------------------+
|       User       | ----> | 1.0 Handle User Request | ----> |  Process Route  |
+-------------------+       +------------------------+       +---------------------+
                                      |                                        |
                                      v                                        v
                            +---------------------+       +----------------------+
                            | 2.0 Match Route    | ----> | Load Page Component  |
                            +---------------------+       +----------------------+
                                      |
                                      v
                            +----------------------+       +------------------+
                            | 3.0 Render Component | ----> | Display to User |
                            +----------------------+       +------------------+
```

### **Explanation:**

1. **Handle User Request (Process 1.0):**
   - The user interacts with the navigation system (clicking links, entering a URL).
   - The system captures the request and sends it for processing.

2. **Match Route (Process 2.0):**
   - The router checks the URL and matches it to the correct component.
   - If a valid route is found, the corresponding component is loaded.
   - If no match is found, a "404 Not Found" page is displayed.

3. **Render Component (Process 3.0):**
   - The application renders the correct component based on the matched route.
   - The output is displayed to the user with updated UI elements.

---

## **3. Level 2 DFD (Detailed Breakdown of Each Process)**

### **1. Handle User Request (Process 1.0)**
```
+-------------------+       +----------------------+       +----------------+
|       User       | ----> | 1.1 Capture Request  | ----> | Validate Route |
+-------------------+       +----------------------+       +----------------+
```
- The system listens for user requests and checks if the requested route is valid.

### **2. Match Route (Process 2.0)**
```
+-------------------+       +----------------------+       +----------------+
|  Validate Route  | ----> | 2.1 Check Router     | ----> | Find Component |
+-------------------+       +----------------------+       +----------------+
```
- The router checks the predefined routes and finds the corresponding component.

### **3. Render Component (Process 3.0)**
```
+-------------------+       +----------------------+       +----------------+
|  Load Component  | ----> | 3.1 Render UI        | ----> | Display to User |
+-------------------+       +----------------------+       +----------------+
```
- The correct page component is loaded and rendered for display.

---

## **Conclusion**

- This **DFD** outlines the **Router for Navigation Project’s** data flow and page rendering process.
- This document should be included in the project repository under `docs/DFD.md` for reference.

---

## **Next Steps**

1. **Create a `docs/` folder in your project.**
2. **Save this file as `DFD.md` inside `docs/`.**
3. **Push to GitHub:**


