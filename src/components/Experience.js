import React from 'react';

const Experience = () => {
    return (
        <div className='divWithPadding'>
            <h2>Experience</h2>
            <hr className='cus-hr'/>

            <div className="education-item">
                <div className="school">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <p style={{ margin: '0', marginBottom: '10px' }}><strong><a href="https://thehemera.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#004080', fontSize: '1.2em' }}>Hemera</a></strong></p>
                        <p className="location">2024.03 - now</p>
                    </div>
                    <p className="italic-underlined-text">Head of Research</p>
                    <ul>
                        <li>Developed a methodology to evaluate the quality of on-chain engagement for Linea. </li>
                        <li>Conducted research on trending topics such as EIP-4844 and memecoins.</li>
                    </ul>
                </div>
            </div>

            <div className="education-item">
                <div className="school">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <p style={{ margin: '0', marginBottom: '10px' }}><strong><a href="https://sixdegree.xyz/" target="_blank" rel="noopener noreferrer" style={{ color: '#004080', fontSize: '1.2em' }}>Sixdegree Lab</a></strong></p>
                        <p className="location">2022.09 - now</p>
                    </div>
                    <p className="italic-underlined-text">Co-founder</p>
                    <ul>
                        <li>Provided data as a service to 30+ clients, including protocols (EigenLayer, Lens, ParaSwap..), VC (ParaFi) and liquid fund (Skycatcher). </li>
                        <li>Established partnerships with Nansen and Quest Terminal (RabbitHole).</li>
                        <li>Won grants from Ethereum Foundation, Dune and Lens protocol.</li>
                    </ul>
                </div>
            </div>


            <div className="education-item">
                <div className="school">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <p style={{ margin: '0', marginBottom: '10px' }}><strong><a href="https://www.nethermind.io/" target="_blank" rel="noopener noreferrer" style={{ color: '#004080', fontSize: '1.2em' }}>Nethermind</a></strong></p>
                        <p className="location">2023.05 - 2023.09</p>
                    </div>
                    <p className="italic-underlined-text">Data Analyst / Researcher @Ventor Group - Internship</p>
                    <ul>
                        <li>Performed internal technical due diligence and token analysis on various target protocols, including Render network, SafeStake, and ParaSwap.</li>
                        <li>Conducted external research reports for clients, covering trending topics such as ERC6551, intents, and Tron blockchain.</li>
                    </ul>
                </div>
            </div>

            <div className="education-item">
                <div className="school">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <p style={{ margin: '0', marginBottom: '10px' }}><strong><a href="https://archloot.com/#Home" target="_blank" rel="noopener noreferrer" style={{ color: '#004080', fontSize: '1.2em' }}>Connextion (ArchLoot)</a></strong></p>
                        <p className="location">2022.09 - 2023.05</p>
                    </div>
                    <p className="italic-underlined-text">Smart contract developer - Internship</p>
                    <ul>
                        <li>Contributed to the development/ testing of smart contracts (solidity), focusing on equipment integration and token staking.</li>
                        <li>Conducted research on fully onchain game.</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Experience;
