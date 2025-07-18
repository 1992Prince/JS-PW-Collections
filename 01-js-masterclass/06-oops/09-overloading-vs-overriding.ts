/**
 * 
Method Overloading in TS

    ✅ Yes (with one implementation)
    Multiple signatures, single body; manual type checking inside

Method Overriding in TS
    ✅ Yes
    Subclass can redefine parent method; override keyword is recommended






🔁 Difference Between Method Overloading and Method Overriding in TypeScript

| Feature / Point          | **Method Overloading**                                        | **Method Overriding**                                    |
| ------------------------ | ------------------------------------------------------------- | -------------------------------------------------------- |
| **Definition**           | Same method name, **different parameters**, in **same class** | Same method name & parameters, redefined in **subclass** |
| **Purpose**              | To offer **multiple ways** to call the same method            | To **change behavior** of inherited method               |
| **Where used**           | In **same class**                                             | In **child class** (with `extends`)                      |
| **Implementation**       | ✅ Only **one actual method**, others are **signatures**       | ✅ Method redefined completely in subclass                |
| **Inheritance needed**   | ❌ Not required                                                | ✅ Required (must extend a parent class)                  |
| **Runtime/Compile Time** | Compile-time concept only                                     | Runtime behavior                                         |
| **Support in JS**        | ❌ Not natively supported, simulated via type checks           | ✅ Yes (JavaScript supports it)                           |
| **Keyword**              | No special keyword                                            | Recommended: `override` (for clarity)                    |

🧠 Final Tip:
    Use Overloading when you want flexible method signatures
    Use Overriding when you want specialized behavior in subclasses
 */