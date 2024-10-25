const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    branch: { type: String, required: true },
    year: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});


const Student = mongoose.model('Student', studentSchema);


app.post('/api/register', async (req, res) => {
    const { name, branch, year, email, password } = req.body;

    try {
        const newStudent = new Student({ name, branch, year, email, password });
        await newStudent.save();
        res.status(201).json({ message: 'Student registered successfully' });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: 'Email already registered' });
        }
        res.status(500).json({ message: 'Server error' });
    }
});


app.get('/api/students', async (req, res) => {
    try {
        const students = await Student.find(); 
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the student exists
        const student = await Student.findOne({ email });

        if (!student) {
            return res.status(400).json({ message: 'Student not found' });
        }

        // Compare the password
        if (student.password !== password) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        // If credentials are valid, send a success message
        res.status(200).json({ message: 'Login successful', student });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


const dbURI = 'mongodb+srv://iamomkar0007:iakil8G1Wj6wC3pk@student.thvjh.mongodb.net/studentDB?retryWrites=true&w=majority';


mongoose.connect(dbURI)
    .then(() => {
        console.log('Connected to MongoDB!');
    })
    .catch((error) => {
        console.error('Connection failed:', error.message);
    });
