# **Data Flow Diagram (DFD) for QR Code Generator Project**

## **1. Level 0 DFD (Context Diagram)**

At this level, we represent the entire system as a **single process**, showing the flow of data between the system and external entities.

### **Diagram Representation:**

```
+-------------------+       +---------------------------+       +------------------+
|       User       | ----> |   QR Code Generator   | ----> |   QR Code Image  |
+-------------------+       +---------------------------+       +------------------+
```

### **Explanation:**
- **User** inputs data (text, URL, or other information) into the system.
- The **QR Code Generator System** processes this input and generates a QR code.
- The generated **QR Code Image** is displayed or downloaded by the user.

---

## **2. Level 1 DFD (Decomposition of QR Code Generator System)**

This level breaks down the **QR Code Generator System** into key processes:

1. **Input Processing**
2. **QR Code Generation**
3. **QR Code Display & Download**

### **Diagram Representation:**

```
+-------------------+       +------------------------+       +---------------------+
|       User       | ----> | 1.0 Input Processing  | ----> | Validate Input Data |
+-------------------+       +------------------------+       +---------------------+
                                       |                                       |
                                       v                                       v
                             +---------------------+       +----------------------+
                             | 2.0 Generate QR Code | ----> | Store QR Code Image |
                             +---------------------+       +----------------------+
                                       |
                                       v
                             +----------------------+       +------------------+
                             | 3.0 Display QR Code  | ----> | User Downloads  |
                             +----------------------+       +------------------+
```

### **Explanation:**

1. **Input Processing (Process 1.0):**
   - The user enters text, a URL, or other data.
   - The system validates the input to ensure it is in a correct format.

2. **QR Code Generation (Process 2.0):**
   - The validated data is processed using a QR code library.
   - A QR code image is generated and stored temporarily.

3. **QR Code Display & Download (Process 3.0):**
   - The generated QR code is displayed on the screen.
   - The user can choose to download the QR code as an image file.

---

## **3. Level 2 DFD (Detailed Breakdown of Each Process)**

### **1. Input Processing (Process 1.0)**

```
+-------------------+       +-------------------------+       +-----------------+
|       User       | ----> | 1.1 Enter Input Data   | ----> | Validate Input |
+-------------------+       +-------------------------+       +-----------------+
```

- User enters text/URL in the input field.
- The system validates the input (e.g., ensures URL format is correct).

### **2. QR Code Generation (Process 2.0)**

```
+-------------------+       +------------------------+       +---------------------+
|  Validated Data  | ----> | 2.1 Encode QR Code  | ----> | Store as Image  |
+-------------------+       +------------------------+       +---------------------+
```

- The system encodes the data using a QR code library.
- The QR code is stored as an image in memory or a temporary location.

### **3. QR Code Display & Download (Process 3.0)**

```
+---------------------+       +----------------------+       +-----------------+
|  Stored QR Code  | ----> | 3.1 Display QR Code  | ----> | User Downloads |
+---------------------+       +----------------------+       +-----------------+
```

- The generated QR code is displayed on the web page.
- The user can download the QR code image.

---

## **Conclusion**

- This **DFD** outlines the **QR Code Generator project's** data flow from input to output.
- This document should be included in the project repository under `docs/DFD.md` for reference.

---

## **Next Steps**

1. **Create a `docs/` folder in your project.**
2. **Save this file as `DFD.md` inside `docs/`.**
3. **Push to GitHub:**
  

