// src/components/forms/CertifyingCopy.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CertifyingCopy = () => {
    const [formData, setFormData] = useState({
        state: '',
        county: '',
        date: '',
        individuals: '',
        title: '',
        expiry_date: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Logic to send the data to a backend service can be added here
    };

    return (
        <div className="container p-4 mt-10">
            <h2 className="text-xl font-bold mb-4">Certifying or Attesting a Copy of a Record</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <label className="block">
                    State of <input type="text" name="state" value={formData.state} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </label>
                <label className="block">
                    County of <input type="text" name="county" value={formData.county} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </label>
                <label className="block">
                    This record was certified before me on <input type="date" name="date" value={formData.date} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </label>
                <label className="block">
                    by <input type="text" name="individuals" value={formData.individuals} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </label>
                <label className="block">
                    Title of office <input type="text" name="title" value={formData.title} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </label>
                <label className="block">
                    My commission expires: <input type="date" name="expiry_date" value={formData.expiry_date} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </label>
                <div className="flex justify-between items-center">
                    <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Submit</button>
                    <button type="button" onClick={() => navigate('/')} className="mt-4 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700">Back</button>
                </div>
            </form>
        </div>
    );
};

export default CertifyingCopy;
