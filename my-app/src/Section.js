import React from 'react';
import './Section.css';

function ScrollDown({children}){
    function handleScrollClick() {
        const viewportHeight = window.innerHeight;
        window.scrollBy({
            top: viewportHeight,
            behavior: 'smooth',
        });
    }

    return (

        <h2 onClick={handleScrollClick}>{children}</h2>
    );

}

export const Section = () => {

    return (
    <div className='section'>
        <div className='innerContainer'>
            <h1 className='header'>Hi!</h1>
            <ScrollDown>
                press here
            </ScrollDown>
        </div>
    </div>
    );
};

export const SecondSection = () => {
    return(
        <div className='innerContainer row'>
            <div className='bulk ParagraphBulk'>
                <h1 className='header'>Jin Lee</h1>
                <p>Hello! My name is Jin and I'm a sophomore studying Busintess, Technology, and Entrepreneurship at NYU Stern. <br></br> My interests lie in Product Management, Marketing, UI/UX and cats</p>
            </div>
            <div className='bulk PicSocials'>
                <img src='./Jin_Lee.jpg' className='profilePic'></img>
            </div>
        </div>
    );
}

