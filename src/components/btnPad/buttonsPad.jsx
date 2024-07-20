import React from "react";
import Button from "../button/button";
import style from './buttonsPad.module.css';

const ButtonsPad = ({clickHandle}) => {
  const handleClick = btnName => {
    clickHandle(btnName);
  }

  return (
    <div className={style['button-pad']} >
      <div>
        <Button name='+/-' clickHandle={handleClick} style={style['button-pad__btn-special']} />
        <Button name='%' clickHandle={handleClick} style={style['button-pad__btn-special']} />
        <Button name='AC' clickHandle={handleClick} style={style['button-pad__btn-special']} />
        <Button name='/' clickHandle={handleClick} style={style['button-pad__btn-operation']} />
      </div>
      <div>
        <Button name='7' clickHandle={handleClick} style={style['button-pad__btn-number']} />
        <Button name='8' clickHandle={handleClick} style={style['button-pad__btn-number']} />
        <Button name='9' clickHandle={handleClick} style={style['button-pad__btn-number']} />
        <Button name='x' clickHandle={handleClick} style={style['button-pad__btn-operation']} />
      </div>
      <div>
        <Button name='4' clickHandle={handleClick} style={style['button-pad__btn-number']} />
        <Button name='5' clickHandle={handleClick} style={style['button-pad__btn-number']} />
        <Button name='6' clickHandle={handleClick} style={style['button-pad__btn-number']} />
        <Button name='-' clickHandle={handleClick} style={style['button-pad__btn-operation']} />
      </div>
      <div>
        <Button name='1' clickHandle={handleClick} style={style['button-pad__btn-number']} />
        <Button name='2' clickHandle={handleClick} style={style['button-pad__btn-number']} />
        <Button name='3' clickHandle={handleClick} style={style['button-pad__btn-number']} />
        <Button name='+' clickHandle={handleClick} style={style['button-pad__btn-operation']} />
      </div>
      <div>
        <Button name='0' clickHandle={handleClick} style={style['button-pad__btn-zero']} />
        <Button name=',' clickHandle={handleClick} style={style['button-pad__btn-special']} />
        <Button name='=' clickHandle={handleClick} style={style['button-pad__btn-special']} />
      </div>
    </div>
  );
};

export default ButtonsPad;
