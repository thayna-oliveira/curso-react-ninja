import React from 'react';

const Box = ({ color }) => (
    <div style={{
        backgroundColor: color,
        height: `50px`,
        width: `50px`
    }} onClick={(e) => {
        alert(`Você clicou no botão ${color}`);
    }} />
);

Box.defaultProps = {
    color: '#ccc'
}

export default Box;
