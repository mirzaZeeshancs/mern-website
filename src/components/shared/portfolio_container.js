import React from "react";
import Header from "./header";
import '../../stylesheets/portfolio.scss';

export default function PortfolioContainer({name, children}) {
    return (
        <React.Fragment>
            <div className='portfolio-header-container'>
                <div className='portfolio-header'>
                    <Header />
                </div>
            </div>
                {children}
           
        </React.Fragment>
    )
}