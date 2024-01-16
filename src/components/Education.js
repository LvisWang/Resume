import React from 'react';
import './styles.css';

const Education = () => {
    return (
        <div className='divWithPadding'>
            <h2>Education</h2>
            <hr className='cus-hr' />
            <div className="education-item">
                <div className="school">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <p style={{ margin: '0', marginBottom: '5px' }}><strong>Shanghai Institute of Microsystem and Information Technology, CAS</strong></p>
                        <p className="location">Class of 2024</p>
                    </div>
                    <p className="degree">PhD in Terahertz Laser Physics</p>
                </div>
            </div>
           
            <div className="education-item">
                <div className="school">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <p style={{ margin: '0', marginBottom: '5px' }}><strong>University of Science and Technology of China</strong></p>
                        <p className="location">Class of 2021</p>
                    </div>
                    <p className="degree">MS in Microelectronic Engineering</p>
                </div>
            </div>

            <div className="education-item">
                <div className="school">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <p style={{ margin: '0', marginBottom: '5px' }}><strong>Shanghai University</strong></p>
                        <p className="location">Class of 2019</p>
                    </div>
                    <p className="degree">BS in Optoelectronics & Information Electronics Engineering</p>
                </div>
            </div>
        </div>
    );
};

export default Education;
