
# **Data Flow Diagram (DFD) for Retail App**

## **1. Level 0 DFD (Context Diagram)**

At this level, we represent the entire system as a **single process**, showing the flow of data between the system and external entities.

### **Diagram Representation:**

```
+-------------------+       +--------------------+
|   User           | ----> |  Retail App System | ----> |  Database |
+-------------------+       +--------------------+
```

### **Explanation:**

- **User** interacts with the **Retail App System**.
- The system processes the user's requests and retrieves or stores data in the **Database**.

---

## **2. Level 1 DFD (Decomposition of Retail App System)**

This level breaks down the **Retail App System** into key processes:

1. **User Registration & Authentication**
2. **Product Management**
3. **Order Processing**

### **Diagram Representation:**

```
+-------------------+       +--------------------------+       +------------------+
|       User       | ----> | 1.0 User Authentication  | ----> |   User Database  |
+-------------------+       +--------------------------+       +------------------+
                                       |
                                       v
+-------------------+       +------------------------+        +----------------+
|       Admin      | ----> | 2.0 Product Management | ----> | Product Database |
+-------------------+       +------------------------+        +----------------+
                                       |
                                       v
+-------------------+       +---------------------+        +----------------+
|       User       | ----> | 3.0 Order Processing | ----> | Order Database |
+-------------------+       +---------------------+        +----------------+
```

### **Explanation:**

1. **User Authentication (Process 1.0):**

   - Users register or log in.
   - Credentials are validated against the **User Database**.

2. **Product Management (Process 2.0):**

   - Admins manage products (add, update, delete, view).
   - Product data is stored in the **Product Database**.

3. **Order Processing (Process 3.0):**

   - Users place orders.
   - Orders are validated and saved in the **Order Database**.

---

## **3. Level 2 DFD (Detailed Breakdown)**

This level provides a more detailed breakdown of **User Authentication & Order Processing**.

### **User Authentication (Process 1.0)**

```
+-------------------+       +----------------------------+       +------------------+
|       User       | ----> | 1.1 Enter Credentials      | ----> |   User Database  |
+-------------------+       +----------------------------+       +------------------+
                                       |
                                       v
                             +-------------------------+
                             | 1.2 Validate Credentials |
                             +-------------------------+
                                       |
                    +------------------------+-------------------+
                    |                                                 |
                    v                                                 v
        +-----------------+                        +--------------------+
        | 1.3 Login Success |                        | 1.4 Login Failed |
        +-----------------+                        +--------------------+
```

### **Order Processing (Process 3.0)**

```
+-------------------+       +----------------------+       +----------------+
|       User       | ----> | 3.1 Add to Cart      | ----> |  Cart Database |
+-------------------+       +----------------------+       +----------------+
                                       |
                                       v
                             +----------------------+
                             | 3.2 Checkout Process |
                             +----------------------+
                                       |
                                       v
                             +----------------------+
                             | 3.3 Payment Gateway |
                             +----------------------+
                                       |
                    +------------------------+--------------------+
                    |                                                 |
                    v                                                 v
        +---------------------+                     +----------------------+
        | 3.4 Payment Success |                     | 3.5 Payment Failed |
        +---------------------+                     +----------------------+
                                       |
                                       v
                             +---------------------+
                             | 3.6 Generate Order |
                             +---------------------+
                                       |
                                       v
                             +--------------------+
                             | 3.7 Update Order DB |
                             +--------------------+
```

### **Explanation:**

1. \*\*User Authentication: \*\*

   - User enters credentials, which are validated.
   - If valid, login is successful; otherwise, an error is shown.

2. \*\*Order Processing: \*\*

   - Users add products to their cart.
   - They proceed to checkout and make payments.
   - If the payment is successful, the order is saved; otherwise, an error is displayed.

---

## **Conclusion**

- This **DFD** outlines the **Retail App’s** data flow from user authentication to product management and order processing.
- This document should be included in the project repository under `docs/DFD.md` for reference.

---

## **Next Steps**

1. **Create a ****`docs/`**** folder in your project.**
2. **Save this file as ****`DFD.md`**** inside ****`docs/`****.**
3. **Push to GitHub:**
   ```sh
   git add docs/DFD.md
   git commit -m "Added DFD documentation"
   git push origin dev
   ```



