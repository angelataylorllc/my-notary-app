// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import AcknowledgmentIndividual from './components/forms/AcknowledgementIndividual.jsx';
import AcknowledgementRepresentative from './components/forms/AcknowledgementRepresentative.jsx'
import VerificationOath from './components/forms/VerificationOath.jsx';
import WitnessingSignature from './components/forms/WitnessingSignature.jsx';
import CertifyingCopy from './components/forms/CeritfyingCopy.jsx';
import CertifyingEvent from './components/forms/CertifyingEvent.jsx';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/acknowledgment-individual" element={<AcknowledgmentIndividual />} />
                <Route path="/acknowledgment-representative" element={<AcknowledgementRepresentative />} />
                <Route path="/verification-oath" element={<VerificationOath />} />
                <Route path="/witnessing-signature" element={<WitnessingSignature />} />
                <Route path="/certifying-copy" element={<CertifyingCopy />} />
                <Route path="/certifying-event" element={<CertifyingEvent />} />
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
