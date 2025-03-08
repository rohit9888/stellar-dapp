import React, { useState } from 'react'

function Payment() {
    const [buttonText, setButtonText] = useState('Continue');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const [walletConnect, setwalletConnect] = useState(false);


    const getButtonStyle = () => {
        return {
            background: email && name ? '#465CA9' : '#C1C5D2',
            cursor: email && name ? 'pointer' : 'not-allowed',
        }
    };

    const getPayButtonStyle = () => {
        return {
            background: walletConnect ? '#465CA9' : '#C1C5D2',
            cursor: walletConnect ? 'pointer' : 'not-allowed',
            transition: 'all 0.3s ease'
        }
    }
    const handleButtonClick = () => {
        if (email && name) {
            setIsClicked(true);
            setButtonText('Pay Now')

        }
        if (walletConnect) {
            setwalletConnect(true);

        }
    }


    const gorillaPayBox = <div id="gorillaPayBox">
        <img src="images/GorilaaPay_Blue_logo_2.png" alt="gorilla-pay-logo" />
    </div>;
    return (
        <div className="payment-container">
            <div id="gorilla-pay-logo"></div>
            {!isClicked ? < div id="containers">
                {gorillaPayBox}
                {bigBox()}
                {nameBox()}
            </div> : changeDesign()}
        </div>
    )
    function nameBox() {
        return <div id="namebox">
            {nameEmail()}
            {continueButton()}
        </div>;
    }
    function continueButton() {
        return <div id="continue">
            {!isClicked ?
                <button
                    id="continue2"
                    style={getButtonStyle()}
                    onClick={handleButtonClick}
                >
                    <div id="continuebutton">{buttonText}</div>
                </button> :
                <button
                    id="pay2"
                    style={getPayButtonStyle()}
                    onClick={handleButtonClick}
                    disabled={!walletConnect}
                >
                    <div id="payButton">{buttonText}</div>
                </button>
            }
        </div>
    }

    function nameEmail() {
        return <div id="nameEmail">
            <div id="names">
                <div id="namekey">Name*</div>
                <div id="namesbox">
                    <input
                        id='finalname'
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value);
                        }}>

                    </input>
                </div>
            </div>
            {<div id="emailbox">
                <div id="emailkey">Email*</div>
                <div id="emailvalue">
                    <input
                        id="emailvalue2"
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }} />
                </div>
            </div>}
        </div>;
    }

    function changeDesign() {
        return (
            <div id="frame">

                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M15.84 6.92V8.92H3.84L9.34 14.42L7.92 15.84L0 7.92L7.92 0L9.34 1.42L3.84 6.92H15.84Z" fill="#646464" />
                    </svg>
                </span>
                <div id="outerBox" >
                    {gorillaPayBox}
                    {bigBox()}
                    {nameEmailSave()}
                </div>
                <div>

                    {continueButton()}
                    <p id="warning"> *To proceed with the payment, please connect your digital wallet</p>
                </div>
            </div>

        )
    }
    function bigBox() {
        return (
            <div id="bigbox">
                <div id="requested">
                    <strong id="gorillatech">Gorillatech</strong> has Requested
                </div>
                <div id="amountbox">
                    <div id="usdcbox">
                        <img className="usdclogo" src="images/usd-coin-usdc-logo 1.png" alt="usd-coin-logo" />
                    </div>
                    <div id="amount">50.00</div>
                    <div id="usdc">USDC</div>
                </div>
                <div id="for">for</div>
                <div id="white">White Cotton Shirt</div>
            </div>
        )
    }

    function nameEmailSave() {
        return (
            <div id="nameEmailSave">
                <div id="nameSave" gap-colum="8px">
                    <div id="NameSave"> Name </div>
                    <div id="NameSaved"> {name} </div>
                </div>

                <div id="nameSave" gap-colum="8px">
                    <div id="NameSave"> Email </div>
                    <div id="NameSaved"> {email} </div>
                </div>

            </div>
        )
    }



}

export default Payment