import React from 'react';
import './styles.css';

const LensCaseStudy = () => {
    return (
        <div className='divWithPadding'>
            <h3 >Lens Protocol | <a href="https://dune.com/workspace/library?tab=dashboards&q=lens" target="_blank" rel="noopener noreferrer"   style={{ color: '#004080', textDecoration: 'underline' }} >Dashboards</a> | 
            <a href="https://dune.com/workspace/library?tab=dashboards&q=lens" target="_blank" rel="noopener noreferrer"  style={{ color: '#004080', textDecoration: 'underline' }} > Ournetwork</a> |
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
