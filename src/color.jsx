import React, { useState } from 'react';


const ColorComponent = () => {

    const [backgroundColor, setBackgroundColor] = useState('red');
    const changeColor = () => {
        
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setBackgroundColor(randomColor);
    }
    return (
        <div style={{ backgroundColor, width: '200px', height: '200px' }}>
            <button onClick={changeColor}>clicme</button>
        </div>
    );
};
export default ColorComponent;