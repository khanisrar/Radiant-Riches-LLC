import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleInfo, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <>
            <div className="container" style={{ marginTop: '40px' }}>
                <header>
                    <h1 className="head-text">Best Website builders in the US</h1>
                    <div className="top">
                        <div className="left">
                            <p style={{ marginRight: '20px' }}><FontAwesomeIcon icon={faCircleCheck} /> Last Updated - Last Updated</p>
                            <p><FontAwesomeIcon icon={faCircleInfo} /> Advertising Disclosure</p>
                        </div>
                        <div className="right">
                            <select >
                                <option>Top Relevant</option>
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
                    </div>
                    <div className="header-links">
                        <button>Tools</button>
                        <button>AWS Builder</button>
                        <button>Start Build</button>
                        <button>Build Supplies</button>
                        <button>Tooling</button>
                        <button>BlueHosting</button>
                    </div>
                    <div className="bredcomb">
                        <a href="">Home</a>
                        <FontAwesomeIcon className="angle-right" icon={faAngleRight} />
                        <a href="">Hosting for all</a>
                        <FontAwesomeIcon className="angle-right" icon={faAngleRight} />
                        <a href="">Hosting</a>
                        <FontAwesomeIcon className="angle-right" icon={faAngleRight} />
                        <a href="">Hosting6</a>
                        <FontAwesomeIcon className="angle-right" icon={faAngleRight} />
                        <a href="">Hosting5 </a>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Header;