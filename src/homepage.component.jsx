import React from 'react';
import './homepage.styles.scss';

const Homepage = () => (

    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>PAINTINGS</h1>
                    <span className='subtitles'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>CONCEPT ARTS</h1>
                    <span className='subtitles'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>LINE ARTS</h1>
                    <span className='subtitles'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>ANIME</h1>
                    <span className='subtitles'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>SHADINGS</h1>
                    <span className='subtitles'>SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
);

export default Homepage;