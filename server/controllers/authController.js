import pool from "../database/db"

export const signup = async (req, res) => {
    const email = req.body;
    const password = req.body;
    if (email === "" || password === "") {
        console.log("Fields missing");
    }
    const hashedpass = bcrypt.hash(password);
    try {
        await pool.query("INSERT INTO users (email,password)VALUES($1,$2)", [email, hashedpass]);
    }
    catch (err) {
        console.err("failed to signup");
    }
}

export const login = async (req, res) => {
    const email = req.body;
    const password = req.body;
    const data = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
    const hashedpass = data.password;
     try {
         const isMatch = await bcrypt.compare(password, hashedpass);
    if (isMatch) {
      console.log('✅ Passwords match!');
      // proceed with login
    } else {
      console.log('❌ Invalid credentials');
    }
  } catch (err) {
    console.error('Error comparing passwords:', err);
  }
};
