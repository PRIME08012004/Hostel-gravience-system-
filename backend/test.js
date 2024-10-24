const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Route imports
const complaintRoutes = require("./routes/complaintRoutes");
const studentRoutes = require("./routes/studentRoutes");
const wardenRoutes = require("./routes/wardenRoutes");
const workersRoutes = require("./routes/workersRoutes");
const userRoutes = require("./routes/userRoutes");
const { authorizeWarden, authorizeWorker, authorizeStudent } = require("./middleware/auth");

const PORT = 5000;

// Registering routes
app.use('/', complaintRoutes);
app.use('/', studentRoutes);
app.use('/', wardenRoutes);
app.use('/', workersRoutes);
app.use('/', userRoutes);

app.use('/students', authorizeStudent, studentRoutes);
app.use('/wardens', authorizeWarden, wardenRoutes);
app.use('/workers', authorizeWorker, workersRoutes);

// Student registration route
app.post("/register", async (req, res) => {
  try {
    const { name, branch, year, email, password } = req.body;

    // Check if the user already exists
    const userExists = await db.pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (userExists.rows.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert the new user into the database
    const newUser = await db.pool.query(
      `INSERT INTO users (name, branch, year, email, password) 
       VALUES ($1, $2, $3, $4, $5) 
       RETURNING *`,
      [name, branch, year, email, hashedPassword]
    );

    // Send the newly created user data back to the client
    res.status(201).json({
      message: "User registered successfully",
      user: newUser.rows[0],
    });
  } catch (err) {
    console.error("Registration error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// Health check route (optional)
app.get("/register", (req, res) => {
  console.log(req.body);
  res.send("Entry Success!");
});

// Listen on port 5000
app.listen(PORT, () => {
  db.initDatabase(); // Initialize the database connection
  console.log(`Server is listening on port ${PORT}`);
});
