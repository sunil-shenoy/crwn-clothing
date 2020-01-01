import React from 'react'

import './homepage.styles.scss'

const HomePage = () => (
        <div className='homepage'>
            <div className='directory-menu'>
                <div class='menu-item'>
                    <div className='content'>
                        <h1 className='title'>HATS</h1>
                        <span className='sybtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div class='menu-item'>
                    <div className='content'>
                        <h1 className='title'>COATS</h1>
                        <span className='sybtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div class='menu-item'>
                    <div className='content'>
                        <h1 className='title'>SHOES</h1>
                        <span className='sybtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div class='menu-item'>
                    <div className='content'>
                        <h1 className='title'>MENS</h1>
                        <span className='sybtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div class='menu-item'>
                    <div className='content'>
                        <h1 className='title'>WOMENS</h1>
                        <span className='sybtitle'>SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
    );

export default HomePage;