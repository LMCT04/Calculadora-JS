import React from 'react';

const Button = ({clickHandle, name, style}) => {
    const handleClick = () => {
        clickHandle(name)
    }

    return (
        <div>
            <button onClick={handleClick} className={style} >{name}</button>
        </div>
    );
}

export default Button;
