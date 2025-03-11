# **Data Flow Diagram (DFD) for E-Commerce Store**

## **1. Level 0 DFD (Context Diagram)**

At this level, we represent the entire system as a **single process**, showing the flow of data between the system and external entities.

### **Diagram Representation:**
```
+-------------------+       +---------------------------+       +------------------+
|       User       | ----> |  E-Commerce Store System | ----> |   Database      |
+-------------------+       +---------------------------+       +------------------+
```

### **Explanation:**
- **User** interacts with the **E-Commerce Store System** by browsing products, adding items to the cart, and making purchases.
- The system processes the user's actions and retrieves/stores data in the **Database**.

---

## **2. Level 1 DFD (Decomposition of E-Commerce Store System)**

This level breaks down the **E-Commerce Store System** into key processes:

1. **User Authentication & Profile Management**
2. **Product Management**
3. **Shopping Cart & Checkout**
4. **Order Processing & Payment**

### **Diagram Representation:**
```
+-------------------+       +------------------------------+       +------------------+
|       User       | ----> | 1.0 User Authentication      | ----> |   User Database  |
+-------------------+       +------------------------------+       +------------------+
                                       |
                                       v
+-------------------+       +-------------------------+        +----------------+
|       Admin      | ----> | 2.0 Product Management | ----> | Product Database |
+-------------------+       +-------------------------+        +----------------+
                                       |
                                       v
+-------------------+       +----------------------+        +----------------+
|       User       | ----> | 3.0 Shopping Cart    | ----> | Cart Database  |
+-------------------+       +----------------------+        +----------------+
                                       |
                                       v
+-------------------+       +----------------------+        +----------------+
|       User       | ----> | 4.0 Order Processing | ----> | Order Database  |
+-------------------+       +----------------------+        +----------------+
```

### **Explanation:**

1. **User Authentication (Process 1.0):**
   - Users register, log in, and manage their profiles.
   - User credentials are validated against the **User Database**.

2. **Product Management (Process 2.0):**
   - Admins add, update, or remove products from the store.
   - Product data is stored in the **Product Database**.

3. **Shopping Cart (Process 3.0):**
   - Users add products to their cart before checkout.
   - The cart contents are stored in the **Cart Database**.

4. **Order Processing (Process 4.0):**
   - Users proceed to checkout and make payments.
   - Order details are saved in the **Order Database**.

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

### **Order Processing (Process 4.0)**
```
+-------------------+       +----------------------+       +----------------+
|       User       | ----> | 4.1 Add to Cart      | ----> |  Cart Database |
+-------------------+       +----------------------+       +----------------+
                                       |
                                       v
                             +----------------------+
                             | 4.2 Checkout Process |
                             +----------------------+
                                       |
                                       v
                             +----------------------+
                             | 4.3 Payment Gateway |
                             +----------------------+
                                       |
                    +------------------------+--------------------+
                    |                                                 |
                    v                                                 v
        +---------------------+                     +----------------------+
        | 4.4 Payment Success |                     | 4.5 Payment Failed |
        +---------------------+                     +----------------------+
                                       |
                                       v
                             +---------------------+
                             | 4.6 Generate Order |
                             +---------------------+
                                       |
                                       v
                             +--------------------+
                             | 4.7 Update Order DB |
                             +--------------------+
```

### **Explanation:**

1. **User Authentication:**
   - Users enter their credentials, which are validated.
   - If valid, login is successful; otherwise, an error message appears.

2. **Order Processing:**
   - Users add products to their cart and proceed to checkout.
   - Payments are processed through a payment gateway.
   - If payment succeeds, the order is confirmed and stored in the database; otherwise, an error is shown.

---

## **Conclusion**

- This **DFD** outlines the **E-Commerce Store’s** data flow from user authentication to product management, shopping cart, and order processing.
- This document should be included in the project repository under `docs/DFD.md` for reference.

---

## **Next Steps**

1. **Create a `docs/` folder in your project.**
2. **Save this file as `DFD.md` inside `docs/`.**
3. **Push to GitHub:**
 


