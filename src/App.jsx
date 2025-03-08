import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Payment from './paymentPage';
import ConnectWallet from './connectWallet';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Payment />} />
                <Route path="/connect-wallet" element={<ConnectWallet />} />
            </Routes>
        </Router>
    );
}

export default App;