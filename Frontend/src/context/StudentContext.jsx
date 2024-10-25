// StudentContext.js or StudentContext.jsx
import React, { createContext, useContext, useState } from 'react';

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
    const [student, setStudent] = useState({ name: "Chinmay Ankolekar" }); // Default value or fetch from API

    return (
        <StudentContext.Provider value={{ student, setStudent }}>
            {children}
        </StudentContext.Provider>
    );
};

export const useStudent = () => useContext(StudentContext);

