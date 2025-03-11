# **Data Flow Diagram (DFD) for Theme Switcher App**

## **1. Level 0 DFD (Context Diagram)**

At this level, we represent the entire system as a **single process**, showing the flow of data between the system and external entities.

### **Diagram Representation:**
```
+-------------------+       +---------------------------+       +--------------------+
|       User       | ----> |  Theme Switcher System  | ----> |   Updated Theme   |
+-------------------+       +---------------------------+       +--------------------+
```

### **Explanation:**
- **User** interacts with the system by selecting a theme mode (Light or Dark mode).
- The **Theme Switcher System** processes the request and updates the UI accordingly.
- The **Updated Theme** is displayed to the user.

---

## **2. Level 1 DFD (Decomposition of Theme Switcher System)**

This level breaks down the **Theme Switcher System** into key processes:

1. **User Input Handling**
2. **Theme State Management**
3. **Apply Theme to UI**

### **Diagram Representation:**
```
+-------------------+       +---------------------------+       +-----------------------+
|       User       | ----> | 1.0 Handle Theme Change  | ----> |   Process Theme Mode  |
+-------------------+       +---------------------------+       +-----------------------+
                                       |                                        |
                                       v                                        v
                             +-----------------------+       +----------------------+
                             | 2.0 Save Theme State | ----> | 3.0 Update UI Theme  |
                             +-----------------------+       +----------------------+
                                       |
                                       v
                             +-----------------------+
                             |  Persist Theme Mode  |
                             +-----------------------+
```

### **Explanation:**

1. **Handle Theme Change (Process 1.0):**
   - The user selects a theme (Light/Dark) from the UI.
   - The system captures the input and sends it for processing.

2. **Save Theme State (Process 2.0):**
   - The selected theme preference is stored in **local storage** or a **state management system**.

3. **Update UI Theme (Process 3.0):**
   - The application updates the styles and re-renders the UI based on the chosen theme.
   - The new theme is reflected in the user interface.

---

## **3. Level 2 DFD (Detailed Breakdown of Each Process)**

### **1. Handle Theme Change (Process 1.0)**
```
+-------------------+       +----------------------+       +----------------+
|       User       | ----> | 1.1 Capture Input    | ----> | Validate Theme |
+-------------------+       +----------------------+       +----------------+
```
- The system listens for user input and checks if it is a valid theme selection.

### **2. Save Theme State (Process 2.0)**
```
+-------------------+       +----------------------+       +----------------+
| Validate Theme   | ----> | 2.1 Store Preference | ----> | Persist Data   |
+-------------------+       +----------------------+       +----------------+
```
- The theme selection is stored in **localStorage** or **state management**.

### **3. Update UI Theme (Process 3.0)**
```
+-------------------+       +----------------------+       +----------------+
|  Load Theme      | ----> | 3.1 Apply CSS Class | ----> | Display to User |
+-------------------+       +----------------------+       +----------------+
```
- The UI is updated based on the chosen theme mode.

---

## **Conclusion**

- This **DFD** outlines the **Theme Switcher App’s** data flow and theme update process.
- This document should be included in the project repository under `docs/DFD.md` for reference.
