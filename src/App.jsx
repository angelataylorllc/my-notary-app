// src/App.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to the Notary Application</h1>
                <ul>
                    <li><Link to="/acknowledgment-individual">Acknowledgment in Individual Capacity</Link></li>
                    <li><Link to="/acknowledgment-representative">Acknowledgment in Representative Capacity</Link></li>
                    <li><Link to="/verification-oath">Verification on Oath or Affirmation</Link></li>
                    <li><Link to="/witnessing-signature">Witnessing or Attesting a Signature</Link></li>
                    <li><Link to="/certifying-copy">Certifying or Attesting a Copy of a Record</Link></li>
                    <li><Link to="/certifying-event">Certifying the Occurrence of an Event or the Performance of an Act</Link></li>
                </ul>
            </header>
        </div>
    );
}

export default App;
