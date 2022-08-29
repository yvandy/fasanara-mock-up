import React from 'react';
import "./Footer.css";
import { Button, Input } from 'antd';
import logoFasanara from '../assets/logoFasanara.png'

const Footer = () => {

    return (
        <div className='mainDiv'>
            <div className='copyright_address_div'>
                <div>
                    All rights reserved ©<br />
                    Fasanara Capital Ltd<br />
                    2022
                </div>
                <div>
                    40 New Bond Street, London W1S 2RX<br />
                    Tel: 0203-430-2482<br />
                    Email: investors@fasanara.com
                </div>
                <div className='footerLinks'>
                    <a href="https://www.fasanara.com/disclaimer">
                        Disclaimer
                    </a><br />
                    <a href="https://storage.googleapis.com/wzukusers/user-17563510/documents/5b07f6b4651b6kldBobF/Privacy%20Policy.pdf">
                        Privacy Policy
                    </a><br />
                    <a href="https://storage.googleapis.com/wzukusers/user-17563510/documents/5b06b6f6630c6TiPobRZ/Internet%20Browsing%20and%20Cookies%20Policy.pdf">
                        Browsing and Cookies
                    </a><br />
                    <a href="https://www.fasanara.com/esg">
                        ESG
                    </a><br />
                    <a href="https://www.fasanara.com/_files/ugd/2bcfa3_079925e1d7da46ae9807d015fc86cf85.pdf">
                        Pillar 3 Disclosure
                    </a><br />

                </div>
                <div style={{ marginRight: "10px" }}>
                    <a target="_blank" rel="noreferrer" style={{ padding: "10px" }} href="https://www.linkedin.com/company/fasanara-capital/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                            fill="#ffffff">
                            <path
                                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" />
                        </svg>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/FasanaraCapital">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                            fill="#ffffff">
                            <path
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className='name_email_subscribe_div'>
                <div>
                    <div style={{ margin: "10px" }}>Join Our Newsletter</div>
                    <div className='nameFlex'>
                        <Input type={"text"} placeholder="Name" />
                        <Input type={"text"} placeholder="Last Name" />
                        <Input type={"email"} placeholder="Email" />
                        <Button style={{ backgroundColor: "#1c1d25", color: "white" }}> Subscribe</Button>
                    </div>
                </div>
                <div>
                </div>
                <div>
                    <img src={logoFasanara} alt="Fasanara" />
                </div>
            </div>
        </div>
    )
}

export default Footer;