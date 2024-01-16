import React from 'react';
import './styles.css';

const EigenLayerCaseStudy = () => {
    return (
        <div className='divWithPadding'>
            <h3> EigenLayer | <a href="https://dune.com/sixdegree/eigenlayer-lst-addition-contest" target="_blank" rel="noopener noreferrer" style={{color: '#004080',  textDecoration: 'underline' }} >Dashboard</a> | <a href="https://x.com/eigenlayer/status/1717966948204777732?s=20" target="_blank" rel="noopener noreferrer" style={{color: '#004080', textDecoration: 'underline' }}>Feedback</a>
            </h3> 

            <div className="case-study-content" style={{ textAlign: 'left', letterSpacing: '0.5px' }}>
                <p style={{ margin: '0', marginTop: '-10px' }}>
                EigenLayer sought to comprehend the distribution of holders and the associated value of Liquid-Staking Tokens (LSTs). We conducted calculations for both the balance and staked value, considering both as components of ownership.
                </p>
            </div>
        </div>
    );
};

export default EigenLayerCaseStudy;
