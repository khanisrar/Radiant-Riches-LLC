import React from "react";
import PC from '../images/pc.png'


const RelatedDeal = () => {
    return (
        <>
            <div className="container">
                <section className="related-deal">
                    <h2>Related deals you might like for</h2>
                    <div className="box-container">
                        <div className="box2">
                            <img src={PC} alt="pc" />
                            <div className="offer-text">
                                <span className="off">26% Off</span>
                                <span className="off">Limited Time</span>
                            </div>
                            <h4>Webbuilder 1</h4>
                            <p>Computer  Modern clasic with wix support</p>
                            <div className="price">
                                <span className="new">$39.96</span>
                                <span className="old">$49.96</span>
                                <span className="off2">(20% Off)</span>
                            </div>
                            <button>View Detail</button>
                        </div>
                        <div className="box2">
                            <img src={PC} alt="pc" />
                            <div className="offer-text">
                                <span className="off">26% Off</span>
                                <span className="off">Limited Time</span>
                            </div>
                            <h4>Webbuilder 1</h4>
                            <p>Computer  Modern clasic with wix support</p>
                            <div className="price">
                                <span className="new">$39.96</span>
                                <span className="old">$49.96</span>
                                <span className="off2">(20% Off)</span>
                            </div>
                            <button>View Detail</button>
                        </div>
                        <div className="box2">
                            <img src={PC} alt="pc" />
                            <div className="offer-text">
                                <span className="off">26% Off</span>
                                <span className="off">Limited Time</span>
                            </div>
                            <h4>Webbuilder 1</h4>
                            <p>Computer  Modern clasic with wix support</p>
                            <div className="price">
                                <span className="new">$39.96</span>
                                <span className="old">$49.96</span>
                                <span className="off2">(20% Off)</span>
                            </div>
                            <button>View Detail</button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default RelatedDeal;