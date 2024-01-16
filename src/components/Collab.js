import React from 'react';
import './styles.css';

const Collab = () => {
    return (
        <div className='divWithPadding'>
            <h3> Collabland | <a href="https://docs.google.com/presentation/d/1HW_-X192lydKyEUGlYeLglROJ8ZX8-hpCOGx5RFElwc/edit#slide=id.p" target="_blank" rel="noopener noreferrer" style={{color: '#004080',  textDecoration: 'underline' }} > TeleFriend Report</a> 
            </h3> 

            <div className="case-study-content" style={{ textAlign: 'left', letterSpacing: '0.5px' }}>
                <p style={{ margin: '0', marginTop: '-10px' }}>
                Helped Collabland in conducting early data research on Unibot and Friend.tech, laying the groundwork for their latest project, TeleFriend. 
                </p>
            </div>
        </div>
    );
};

export default Collab;
