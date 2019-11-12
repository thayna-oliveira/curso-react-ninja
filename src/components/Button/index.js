import React from 'react'; 

const Button = ({children}) => (
    <button>{children}</button>
);

Button.defaultProps = {
    color: '#ccc'
}

export default Button;
