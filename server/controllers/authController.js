import pool from "../database/db.js";
import bcrypt from "bcrypt";
export const signup = async (req, res) => {
  console.log('Signup request received:', req.body, 'Headers:', req.headers);
  
  // Check if req.body is undefined
  if (!req.body) {
    return res.status(400).json({ message: "Request body is missing" });
  }
  
  const { email, password } = req.body || {};
  if (email === "" || password === "") {
    return res.status(400).json({ message: "Fields missing" });
  }
  const hashedpass = await bcrypt.hash(password, 10);
  try {
    await pool.query("INSERT INTO users (email,password)VALUES($1,$2)", [
      email,
      hashedpass,
    ]);
    res.status(201).json({ message: "Signup successful" });
  } catch (err) {
    console.error("failed to signup", err);
    res.status(500).json({ message: "Signup failed" });
  }
};

export const login = async (req, res) => {
  console.log('Login request received:', req.body);
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
  
  try {
    const result = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
    
    if (result.rows.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    
    const user = result.rows[0];
    const hashedpass = user.password;
    
    const isMatch = await bcrypt.compare(password, hashedpass);
    
    if (isMatch) {
      console.log("✅ Passwords match!");
      // You might want to create a session or JWT token here
      return res.status(200).json({ message: "Login successful", user: { email: user.email } });
    } else {
      console.log("❌ Invalid credentials");
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ message: "Login failed" });
  }
};
