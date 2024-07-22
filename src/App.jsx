// src/App.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div className="container">
            <header className="App-header">
                <h1 className='text-3xl font-semibold m-10 '>Welcome to the Notary Application</h1>
                <ul className="list-disc list-inside space-y-2">
                    <li className='m-2 text-xl italic text-blue-900 hover:underline'><Link to="/acknowledgment-individual">Acknowledgment in Individual Capacity</Link></li>
                    <li className='m-2 text-xl italic text-blue-900 hover:underline'><Link to="/acknowledgment-representative">Acknowledgment in Representative Capacity</Link></li>
                    <li className='m-2 text-xl italic text-blue-900 hover:underline'><Link to="/verification-oath">Verification on Oath or Affirmation</Link></li>
                    <li className='m-2 text-xl italic text-blue-900 hover:underline'><Link to="/witnessing-signature">Witnessing or Attesting a Signature</Link></li>
                    <li className='m-2 text-xl italic text-blue-900 hover:underline'><Link to="/certifying-copy">Certifying or Attesting a Copy of a Record</Link></li>
                    <li className='m-2 text-xl italic text-blue-900 hover:underline'><Link to="/certifying-event">Certifying the Occurrence of an Event or the Performance of an Act</Link></li>
                </ul>
            </header>
        </div>
    );
}

export default App;
