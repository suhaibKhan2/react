# **Data Flow Diagram (DFD) for Dynamic Page Project**

## **1. Level 0 DFD (Context Diagram)**

At this level, we represent the entire system as a **single process**, showing the flow of data between the system and external entities.

### **Diagram Representation:**

```
+-------------------+       +--------------------------+       +------------------+
|       User       | ----> |  Dynamic Page System   | ----> |   Components    |
+-------------------+       +--------------------------+       +------------------+
```

### **Explanation:**
- **User** interacts with the **Dynamic Page System** by navigating through different pages.
- The system processes the request and dynamically loads components.
- Components render content based on user interaction.

---

## **2. Level 1 DFD (Decomposition of Dynamic Page System)**

This level breaks down the **Dynamic Page System** into key processes:

1. **Navigation Handling**
2. **Component Rendering**
3. **Error Handling**

### **Diagram Representation:**

```
+-------------------+       +-------------------------+       +------------------+
|       User       | ----> | 1.0 Navigation Handling | ----> |   Navbar.js      |
+-------------------+       +-------------------------+       +------------------+
                                       |
                                       v
+-------------------+       +------------------------+        +----------------+
|       User       | ----> | 2.0 Component Rendering | ----> | Dynamic Pages  |
+-------------------+       +------------------------+        +----------------+
                                       |
                                       v
+-------------------+       +----------------------+        +----------------+
|       User       | ----> | 3.0 Error Handling   | ----> | NotFound.js     |
+-------------------+       +----------------------+        +----------------+
```

### **Explanation:**

1. **Navigation Handling (Process 1.0):**
   - The Navbar.js component manages routing between different pages.
   - Users click on navigation links to switch between Home, About, Contact, and Post pages.

2. **Component Rendering (Process 2.0):**
   - The system loads the requested page dynamically based on navigation.
   - Components inside the **pages** and **components** folders render specific content.

3. **Error Handling (Process 3.0):**
   - If an invalid URL is entered, the system redirects the user to **NotFound.js**.

---

## **3. Level 2 DFD (Detailed Breakdown)**

This level provides a more detailed breakdown of **Navigation Handling & Component Rendering**.

### **Navigation Handling (Process 1.0)**

```
+-------------------+       +-------------------------+       +------------------+
|       User       | ----> | 1.1 Click Navigation    | ----> |   Navbar.js      |
+-------------------+       +-------------------------+       +------------------+
                                       |
                                       v
                             +---------------------------+
                             | 1.2 Route to Page        |
                             +---------------------------+
                                       |
                                       v
                             +---------------------+
                             | 1.3 Load Component |
                             +---------------------+
```

### **Component Rendering (Process 2.0)**

```
+-------------------+       +----------------------+       +------------------+
|       User       | ----> | 2.1 Load Home.js     | ----> |   Render Page    |
+-------------------+       +----------------------+       +------------------+
                                       |
                                       v
+-------------------+       +----------------------+       +------------------+
|       User       | ----> | 2.2 Load About.js    | ----> |   Render Page    |
+-------------------+       +----------------------+       +------------------+
                                       |
                                       v
+-------------------+       +----------------------+       +------------------+
|       User       | ----> | 2.3 Load Contact.js  | ----> |   Render Page    |
+-------------------+       +----------------------+       +------------------+
```

### **Error Handling (Process 3.0)**

```
+-------------------+       +----------------------+       +------------------+
|       User       | ----> | 3.1 Enter Wrong URL  | ----> |   NotFound.js    |
+-------------------+       +----------------------+       +------------------+
```

### **Explanation:**

1. **Navigation Handling:**
   - When the user clicks a link, the system routes to the corresponding page.
   - The Navbar.js component dynamically updates the URL and loads the requested component.

2. **Component Rendering:**
   - The requested component (Home, About, Contact, or Post) is loaded dynamically.
   - The system ensures that only the required content is displayed, improving efficiency.

3. **Error Handling:**
   - If the user enters an invalid URL, the system redirects them to **NotFound.js**, displaying a 404 error message.

---

## **Conclusion**

- This **DFD** outlines the **Dynamic Page project’s** data flow from navigation to component rendering and error handling.
- This document should be included in the project repository under `docs/DFD.md` for reference.

---

## **Next Steps**

1. **Create a `docs/` folder in your project.**
2. **Save this file as `DFD.md` inside `docs/`.**
3. **Push to GitHub:**
  

