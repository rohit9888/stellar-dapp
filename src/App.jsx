import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Payment from './paymentPage';
import img from "./images/GorilaaPay_Blue_logo_2.png";

function App() {
    return (
        <Router>
            <div >
                    <img id="gorillaPayLogo"  src={img} style={{ width: "234px", height: "54px", position: 'relative',
                    top : "25px" , left : "114px" }}/>

            <Routes>
                
                <Route path="/" element={<Payment />} />
                {/* <Route path="/connect-wallet" element={<ConnectWallet />} /> */}
            </Routes>
            </div>

        </Router>
    );
}

export default App;