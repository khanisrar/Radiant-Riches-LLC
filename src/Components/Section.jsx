import React from 'react';
import PC from '../images/pc.png'
import BestChoice from '../images/best-choice-icon.png';
import BestValue from '../images/best-value-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faAngleDown, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'


const Section = () => {
    return (
        <>
            <div className="container">
                <section>
                    <div className="box">
                        <div className="offer">
                            <img src={BestValue} alt="icon" />
                            <span>Best Choice</span>
                        </div>
                        <div className="points">
                            1
                        </div>
                        <div className="left">
                            <img src={PC} alt="pcImg" />
                            <p>Builder 1</p>
                        </div>
                        <div className="rate2">
                            <div>
                                <span className='num'>9.8</span>
                                <span className='stars'>
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                </span>
                            </div>
                            <span className='text'>Exceptional</span>

                        </div>
                        <div className="middle">
                            <p><b>WixPro 72-Inch Responsive Website Builder</b> - Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>

                            <b> Main highlights</b> <br />
                            <p className='pleft'>
                                [What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.
                            </p>
                            <a href="#">Show more <FontAwesomeIcon className='angle-down' icon={faAngleDown} /></a>
                        </div>
                        <div className="right">
                            <div className="rate">
                                <span className='num'>9.8</span>
                                <span className='text'>Exceptional</span>
                                <span className='stars'>
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                </span>
                            </div>
                            <button>View</button>
                        </div>
                    </div>
                    <div className="box">
                        <div className="offer">
                            <img src={BestChoice} alt="icon" />
                            <span>Best Value</span>
                        </div>
                        <div className="points">
                            2
                        </div>
                        <div className="left">
                            <img src={PC} alt="pcImg" />
                            <p>Builder</p>
                        </div>
                        <div className="rate2">
                            <div>
                                <span className='num'>9.5</span>
                                <span className='stars'>
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                    <FontAwesomeIcon className='star' icon={faStarHalfStroke} />
                                </span>
                            </div>
                            <span className='text'>Excellent</span>

                        </div>
                        <div className="middle">
                            <p><b>SiteCraft 68-Inch Ultimate Web Design Studio -</b> Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)</p>

                            <b> Main highlights</b> <br />
                            <p className='pleft'>
                                [What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.
                            </p>
                            <a href="#">Show more <FontAwesomeIcon className='angle-down' icon={faAngleDown} /></a>
                        </div>
                        <div className="right">
                            <div className="rate">
                                <span className='num'>9.5</span>
                                <span className='text'>Excellent</span>
                                <span className='stars'>
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                    <FontAwesomeIcon className='star' icon={faStarHalfStroke} />
                                </span>
                            </div>
                            <button>View</button>
                        </div>
                    </div>
                    <div className="box">
                        <div className="points">
                            3
                        </div>
                        <div className="left">
                            <img src={PC} alt="pcImg" />
                            <p>Builder 1</p>
                        </div>
                        <div className="rate2">
                            <div>
                                <span className='num'>9.3</span>
                                <span className='stars'>
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                    <FontAwesomeIcon className='star' icon={faStarHalfStroke} />
                                </span>
                            </div>
                            <span className='text'>Exceptional</span>

                        </div>
                        <div className="middle">
                            <p><b>WixPro 72-Inch Responsive Website Builder -</b> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>

                            <b> Main highlights</b> <br />
                            <p className='pleft'>
                                [What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.
                            </p>
                            <a href="#">Show more <FontAwesomeIcon className='angle-down' icon={faAngleDown} /></a>
                        </div>
                        <div className="right">
                            <div className="rate">
                                <span className='num'>9.3</span>
                                <span className='text'>Exceptional</span>
                                <span className='stars'>
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                    <FontAwesomeIcon className='star' icon={faStarHalfStroke} />
                                </span>
                            </div>
                            <button>View</button>
                        </div>
                    </div>
                    <div className="box">

                        <div className="points">
                            4
                        </div>
                        <div className="left">
                            <img src={PC} alt="pcImg" />
                            <p>CDK</p>
                        </div>
                        <div className="rate2">
                            <div>
                                <span className='num'>9.1</span>
                                <span className='stars'>
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                </span>
                            </div>
                            <span className='text'>Very Good</span>

                        </div>
                        <div className="middle">
                            <p><b>CDK Resposive Builder:</b> An extensive library of widgets and apps, and detailed step-by-step guides</p>
                            <span className="off">26% Off</span> <br />
                            <b> Main highlights</b> <br />
                            <p className='mleft'>
                                <div><span>9.9</span>Building responsive</div>
                                <div><span>8.9</span>Cool</div>
                                <div><span>8.9</span>Docs</div>
                            </p>
                            <div className='ww'>Why we love it <br />
                                <div><span>&#x2713;</span>Documentation</div>
                                <div><span>&#x2713;</span>Easy Use</div>
                                <div><span>&#x2713;</span>Out of Box</div>

                            </div>

                            <a href="#">Show more <FontAwesomeIcon className='angle-down' icon={faAngleDown} /></a>
                        </div>
                        <div className="right">
                            <div className="rate">
                                <span className='num'>9.1</span>
                                <span className='text'>Very Good</span>
                                <span className='stars'>
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                    <FontAwesomeIcon className='star' icon={faStar} />
                                </span>
                            </div>
                            <button>View</button>
                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}

export default Section;