const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "Om@9529388077",
  host: "localhost",
  port: 5432,
  database: "Hostel-Management"
});

pool.on("error", (error, client) => {
  console.log(error);
});

// Initialize the database and create necessary tables
async function initDatabase() {
  const users = `
    CREATE TABLE IF NOT EXISTS users (
      user_id SERIAL PRIMARY KEY NOT NULL,
      name TEXT NOT NULL,
      branch TEXT,  -- Added field for branch
      year INT ,    -- Added field for year
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
     
      
    );
  `;


  const student = `
    CREATE TABLE IF NOT EXISTS student (
      student_id INT PRIMARY KEY NOT NULL,
      block_id INT,
      usn TEXT,
      room TEXT,
      FOREIGN KEY (student_id) REFERENCES users(user_id) ON DELETE CASCADE,
      FOREIGN KEY (block_id) REFERENCES block(block_id) ON DELETE CASCADE
    );
  `;

  const warden = `
    CREATE TABLE IF NOT EXISTS warden (
      warden_id INT PRIMARY KEY NOT NULL,
      block_id INT,
      FOREIGN KEY (warden_id) REFERENCES users(user_id) ON DELETE CASCADE,
      FOREIGN KEY (block_id) REFERENCES block(block_id) ON DELETE CASCADE
    );
  `;




  const complaint = `
    CREATE TABLE IF NOT EXISTS complaint (
      id SERIAL PRIMARY KEY,
      name TEXT,
      block_id INT,
      category_id INT,
      student_id INT,
      assigned_worker_id INT,
      warden_id INT,
      description TEXT,
      room TEXT,
      is_completed BOOLEAN DEFAULT FALSE, -- Default value for completed status
      created_at TIMESTAMP DEFAULT NOW(),
      assigned_at TIMESTAMP,
      FOREIGN KEY (student_id) REFERENCES student(student_id) ON DELETE CASCADE,
      FOREIGN KEY (block_id) REFERENCES block(block_id) ON DELETE CASCADE,
      FOREIGN KEY (assigned_worker_id) REFERENCES workers(worker_id) ON DELETE CASCADE,
      FOREIGN KEY (category_id) REFERENCES category(category_id) ON DELETE CASCADE,
      FOREIGN KEY (warden_id) REFERENCES warden(warden_id) ON DELETE CASCADE
    );
  `;

  // Execute all the queries here
  await pool.query(users);
  // await pool.query(block);
  await pool.query(student);
  await pool.query(warden);
  // await pool.query(category);
  // await pool.query(workers);
  await pool.query(complaint);
}

// Export the pool and initDatabase function
module.exports = {
  pool,
  initDatabase,
};
