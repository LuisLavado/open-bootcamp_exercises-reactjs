import React, { useState } from 'react';

let red = 0;
let green = 200;
let blue = 150;

let timeoutId;

const Square = () => {

    const [backgroundColor, setBackgroundColor] = useState('#000000');

    const backgroundColorOnDoubleClick = () => {
        clearTimeout(timeoutId);
    }

    const backgroundColorOnMouseEnter = () => {
        let newBackgroundColor = `rgb(${red}, ${green}, ${blue})`;
        console.log('Changing the background color');

        timeoutId = setTimeout(() => {
            red = Math.floor(Math.random() * 250);
            green = Math.floor(Math.random() * 250);
            blue = Math.floor(Math.random() * 250);
            newBackgroundColor = `rgb(${red}, ${green}, ${blue})`;
            backgroundColorOnMouseEnter();
        }, 1000);

        setBackgroundColor(newBackgroundColor);
    }

    const backgroundColorOnMouseOut = () => {
        clearTimeout(timeoutId);
    }

    return (
        <div>
            <div
                onMouseEnter={backgroundColorOnMouseEnter}
                onMouseOut={backgroundColorOnMouseOut}
                onDoubleClick={backgroundColorOnDoubleClick}
                style={{ width: '255px', height: '255px', backgroundColor: `${backgroundColor}`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                My square
            </div>
        </div>
    );
}

export default Square;
