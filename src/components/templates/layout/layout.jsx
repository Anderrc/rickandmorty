import React from 'react';
import Header from '../../organims/header/header';
import './layout.scss';

const Layout = props => {
    const { children } = props;
    return (  
        <div className="t-layout">
            <div className="t-layout-header">
                <Header/>
            </div>
            <div className="t-layout-container">
                { children }
            </div>
        </div>
    );    
}
 
export default Layout;