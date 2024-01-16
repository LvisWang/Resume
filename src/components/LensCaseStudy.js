import React from 'react';
import './styles.css';

const LensCaseStudy = () => {
    return (
        <div className='divWithPadding'>
            <h3 >Lens Protocol | <a href="https://dune.com/sixdegree/lens-protocol-ecosystem-analysis" target="_blank" rel="noopener noreferrer"   style={{ color: '#004080', textDecoration: 'underline' }} >Dashboard1</a> | 
            <a href="https://dune.com/sixdegree/lens-protocol-creator-economics" target="_blank" rel="noopener noreferrer"   style={{ color: '#004080', textDecoration: 'underline' }} >Dashboard2</a> | 
            <a href="https://www.ournetwork.xyz/p/ournetwork-issue-175#:~:text=%E2%91%A2-,Lenster,-%F0%9F%8C%B1" target="_blank" rel="noopener noreferrer"  style={{ color: '#004080', textDecoration: 'underline' }} > Ournetwork1</a> |
            <a href="https://www.ournetwork.xyz/p/ournetwork-issue-160#:~:text=%E2%91%A2-,Lenster,-%F0%9F%91%A5%20Sixdegree" target="_blank" rel="noopener noreferrer"  style={{ color: '#004080', textDecoration: 'underline' }} > Ournetwork2</a> |
            <a href="https://www.ournetwork.xyz/p/ournetwork-issue-188#:~:text=%E2%91%A2-,Lens%20Protocol,-%E2%98%98%EF%B8%8F" target="_blank" rel="noopener noreferrer"  style={{ color: '#004080', textDecoration: 'underline' }} > Ournetwork3</a> |
            <a href="https://x.com/stanikulechov/status/1599702297315250178?s=46&t=dMfZnieuow6WgjFxJ92SNw" target="_blank" rel="noopener noreferrer" style={{ color: '#004080',textDecoration: 'underline' }}  > Feedback</a> 
            
            </h3> 
            
            <div className="case-study-content" style={{ textAlign: 'left', letterSpacing: '0.5px' }}>
                <p style={{ margin: '0', marginTop: '-10px' }}>
                    Empowered the Lens Protocol team by providing insightful data analysis, shedding light on the current state of creator economics and its collaborative impact. Leveraged data-driven insights to guide strategic decision-making, paving the way for the implementation of innovative modules and ensuring a path toward sustained growth.
                </p>

                {/* ... (其他内容) */}
            </div>
        </div>
    );
};

export default LensCaseStudy;
