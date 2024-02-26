import React from "react";


const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="box3-container">
                        <div className="box3">
                            <h4>CATEGORIES</h4>
                            <div className="link">
                                <a href="">Web Builder</a>
                                <a href="">Hosting</a>
                                <a href="">Data Center</a>
                                <a href="">Robotic-Automation</a>
                            </div>
                        </div>
                        <div className="box3">
                            <h4>CONTACT</h4>
                            <div className="link">
                                <a href="">Contact</a>
                                <a href="">Privacy Policy</a>
                                <a href="">Terms Of Service</a>
                                <a href="">Categories</a>
                                <a href="">About</a>
                            </div>
                        </div>
                        <div className="box3 a-center">
                            <select >
                                <option>United States</option>
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;