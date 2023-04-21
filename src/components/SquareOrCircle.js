import React from 'react';

function SquareOrCircle({isCircle}) {
    let dynamicStyles = {
        width: '200px',
        height: '200px',
        borderRadius: isCircle ? '100%' : '0%',
        backgroundColor: 'orange'
    };
    return (
        <div style={dynamicStyles}></div>
    );
}

export default SquareOrCircle;