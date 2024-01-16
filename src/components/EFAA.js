import React from 'react';
import './styles.css';

const EFAA = () => {
    return (
        <div className='divWithPadding'>
            <h3> Ethereum Foundation | <a href="/pdf/AA.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#004080', textDecoration: 'underline' }}>Account Abstraction Report </a> |
                 <a href="https://dune.com/sixdegree/account-abstraction-overview" target="_blank" rel="noopener noreferrer" style={{color: '#004080',  textDecoration: 'underline' }}> Dashboards</a> | <a href="https://x.com/erc4337/status/1705836041444143365?s=20" target="_blank" rel="noopener noreferrer" style={{color: '#004080',  textDecoration: 'underline' }}>Feedback</a>
            </h3> 

            <div className="case-study-content" style={{ textAlign: 'left', letterSpacing: '0.5px' }}>
                <p style={{ margin: '0', marginTop: '-10px' }}>
                We were awarded a grant by the Ethereum Foundation to perform data analysis on the adoption of ERC-4337 account abstraction. We developed a comprehensive dashboard and crafted a detailed report to illustrate the evolution and success of the Account Abstraction (AA) ecosystem.
                </p>
            </div>
        </div>
    );
};

export default EFAA;
