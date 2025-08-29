const { Router }= require ("express");
const userRouter=Router();

userRouter.post('/register', async (req, res) => {
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

userRouter.get('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const student = await Student.findOne({ email });

        if (!student) {
            return res.status(400).json({ message: 'Student not found' });
        }

        if (student.password !== password) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        res.status(200).json({ message: 'Login successful', student });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

userRouter.post('/complaints', async (req, res) => {
    const { Room, about, ComplaintName } = req.body;

    try {
        const newComplaint = new Complaint({ Room, about, ComplaintName });
        await newComplaint.save();
        res.status(201).json({ message: 'Complaint submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error while submitting complaint' });
    }
});