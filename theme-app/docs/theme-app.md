# **Data Flow Diagram (DFD) for Theme App**

## **1. Level 0 DFD (Context Diagram)**

At this level, we represent the entire **Theme App** as a single process interacting with external entities.

### **Diagram Representation:**
```
+-------------------+       +--------------------+       +----------------+
|       User       | ----> |    Theme App      | ----> |  Updated UI   |
+-------------------+       +--------------------+       +----------------+
```

### **Explanation:**
- **User** interacts with the app by selecting or switching themes.
- The **Theme App** processes the request and applies the selected theme.
- The **Updated UI** reflects the chosen theme in real-time.

---

## **2. Level 1 DFD (Decomposition of Theme App)**

Breaking down the **Theme App** into key processes:

1. **User Request Handling**
2. **Theme Processing & Storage**
3. **Applying Theme & Rendering UI**

### **Diagram Representation:**
```
+-------------------+       +-------------------------+       +----------------------+
|       User       | ----> | 1.0 Handle User Request | ----> | Process Theme Change |
+-------------------+       +-------------------------+       +----------------------+
                                      |                                        |
                                      v                                        v
                            +----------------------+       +------------------------+
                            | 2.0 Store Theme      | ----> | 3.0 Apply Theme to UI  |
                            +----------------------+       +------------------------+
                                      |
                                      v
                            +---------------------+
                            |  Update UI Display |
                            +---------------------+
```

### **Explanation:**

1. **Handle User Request (Process 1.0):**
   - The user selects a theme (light mode, dark mode, or custom theme).
   - The app captures the request and processes it.

2. **Store Theme (Process 2.0):**
   - The selected theme is saved in local storage or application state (Redux/Context API).

3. **Apply Theme to UI (Process 3.0):**
   - The stored theme is applied to the UI components dynamically.
   - The UI updates to reflect the theme change in real-time.

---

## **3. Level 2 DFD (Detailed Breakdown of Each Process)**

### **1. Handle User Request (Process 1.0)**
```
+-------------------+       +----------------------+       +-------------------+
|       User       | ----> | 1.1 Capture Request  | ----> | Validate Selection |
+-------------------+       +----------------------+       +-------------------+
```
- The system listens for user theme selection and ensures it's valid.

### **2. Store Theme (Process 2.0)**
```
+-------------------+       +----------------------+       +----------------+
| Validate Theme   | ----> | 2.1 Save to Storage  | ----> | Update State  |
+-------------------+       +----------------------+       +----------------+
```
- The selected theme is stored locally or globally in state management.

### **3. Apply Theme to UI (Process 3.0)**
```
+-------------------+       +----------------------+       +----------------+
|  Retrieve Theme  | ----> | 3.1 Apply to UI      | ----> |  Render Theme  |
+-------------------+       +----------------------+       +----------------+
```
- The system retrieves the stored theme, applies it to UI components, and updates the display.

---

## **Conclusion**

- This **DFD** provides a structured visualization of how the **Theme App** processes user interactions and applies theme changes.
- This document should be included in the project repository under `docs/DFD.md` for reference.

---

## **Next Steps**

1. **Create a `docs/` folder in your project.**
2. **Save this file as `DFD.md` inside `docs/`.**


