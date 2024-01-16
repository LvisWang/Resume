import React from 'react';
import './styles.css';
import LensCaseStudy from './LensCaseStudy';
import EigenLayerCaseStudy from './EigenLayerCaseStudy';
import EFAA from './EFAA'
import Gnosis from './Gnosis'
import Tron from './Tron'
import More from './More'
import ParaSwap from './ParaSwap';
import { Link } from 'react-router-dom';

const CaseStudy = () => {
    return (
        <div className='divWithPadding'>
            <h2>How I leveraged on-chain data analytics to empower my clients for success</h2>
            <hr className='cus-hr' />
            <div style={{ marginLeft: -70, marginTop: '-40px' }}>
                <LensCaseStudy /> 
            </div>

            <div style={{ marginLeft: -70, marginTop: '-40px' }}>
                <EFAA /> 
            </div>

            <div style={{ marginLeft: -70, marginTop: '-40px' }}>
                <Tron /> 
            </div>

            <div style={{ marginLeft: -70, marginTop: '-40px' }}>
                <Gnosis /> 
            </div>

            <div style={{ marginLeft: -70, marginTop: '-40px' }}>
                <ParaSwap /> 
            </div>

            <div style={{ marginLeft: -70, marginTop: '-40px' }}>
                <EigenLayerCaseStudy /> 
            </div>

            <div style={{ marginLeft: -70, marginTop: '-40px' }}>
                <More /> 
            </div>


        </div>
    );
};

export default CaseStudy;
