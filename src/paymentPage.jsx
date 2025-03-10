import React, { useState } from 'react';
import img from "./images/GorilaaPay_Blue_logo_2.png";
import usdc from "./images/usd-coin-usdc-logo 1.png";

function PaymentPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('Continue');
    const [walletConnect,setWalletConnect] = useState(false)
    
    return (
        <div id="outermostBox">
            <div id="gorillaPayBox">
                <img id="gorillaPaylogo" src={img} alt="gorilla pay logo" />
            </div>
            <div id="centreBox">
                <div id="texted">
                    <span id="text">Gorillatech</span>
                    <span id="text2"> has Requested </span>
                </div>

                <div id="usdc">
                    <img id="usdclogo" src={usdc} alt="usdc logo" />
                    <span id="amount" style={{ marginLeft: "4.5px", paddingRight: "8px" }}> 50.00</span>
                    <span id="usdctext"> USDC</span>
                </div>
                <p id="for" style={{ justifyContent: "center", display: "flex" }}>
                    for
                </p>
                <p
                    id="x"
                    style={{
                        color: "#646464",
                        fontFamily: "Chivo",
                        fontSize: "28px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "normal",
                    }}
                >
                    'White Cotton Shirt'
                </p>
            </div>

            <div id="continue">
                <div style={{ marginBottom: "12px" }}>
                    Name <span style={{ color: "#3A65AB" }}> *</span>
                    <input
                        id="box"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div style={{ marginBottom: "12px" }}>
                    Email <span style={{ color: "#3A65AB" }}> *</span>
                    <input
                        id="box"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>

                <div
                    id="continueButton"
                        style={{
                            background: email && name ? "#465CA9" : "#C1C5D2",
                            cursor: email && name ? "pointer" : "not-allowed",
                            
                        }}
                    onClick={() => {
                        if (email && name) setText("Connect Wallet");
                   }}
                >
                    {text}
                </div>
            </div>
        </div>
    );
}

export default PaymentPage;
