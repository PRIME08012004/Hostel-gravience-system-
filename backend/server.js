const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter=require('./src/route/user-router')
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use('api/v1/user',userRouter);

app.post('/api/warden/register', async (req, res) => {
    const { userName, email, password, city, state, pincode, phone } = req.body;

    try {
        const newWarden = new Warden({ userName, email, password, city, state, pincode, phone });
        await newWarden.save();
        res.status(201).json({ message: 'Warden registered successfully' });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: 'Email already registered' });
        }
        console.error("Warden registration error:", error); // Log the full error details
        res.status(500).json({ message: 'Server error' });
    }
});


// Fetch all students
app.get('/api/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Fetch all wardens
app.get('/api/wardens', async (req, res) => {
    try {
        const wardens = await Warden.find();
        res.status(200).json(wardens);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Student Login


// Warden Login
app.post('/api/warden/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const warden = await Warden.findOne({ email });

        if (!warden) {
            return res.status(400).json({ message: 'Warden not found' });
        }

        if (warden.password !== password) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        res.status(200).json({ message: 'Login successful', warden });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
    
    // Submit a Complaint


// Fetch all Complaints
app.get('/api/complaints', async (req, res) => {
    try {
        const complaints = await Complaint.find();
        res.status(200).json(complaints);
    } catch (error) {
        res.status(500).json({ message: 'Server error while fetching complaints' });
    }
});


// MongoDB connection and Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const dbURI = 'DBURL';

mongoose.connect(dbURI)
    .then(() => {
        console.log('Connected to MongoDB!');
    })
    .catch((error) => {
        console.error('Connection failed:', error.message);
    });
