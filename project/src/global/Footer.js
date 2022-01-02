import React from 'react';
import './Footer.css';
import langChange from '../images/lang.jpg';
import zoom from '../images/zoom.png';

const Footer = props => {
  return (
    <footer className="footer">     
        <button className="buttonlang">
            <img src={langChange} alt="lang change" width="60" height="50"/>
        </button>
        <div className="zoomdiv">
            <img src={zoom} alt="zoom change" width="80" height="80"/>
            <div className="buttonDiv">
                <button className="buttonChange">+</button>
                <button className="buttonChange">-</button>
            </div>
        </div>
    </footer>
    );
};

export default Footer;