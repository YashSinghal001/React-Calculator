import React, { useState } from 'react';

export const Cal = () => {
    const [value, setValue] = useState('');

    const handleClick = (evnt) => {
        const btnValue = evnt.target.innerText;

        if (btnValue === 'DEL') {
           setValue(value.substring(0, value.length-1));
            // setValue(value.slice(0, -1));
        } else if (btnValue === 'AC') {
            setValue('');
        } else if (btnValue === '=') {
            try {
                //when we remove  toString() is show error 
                setValue(eval(value).toString());
            } catch {
                setValue('Error');
            }
        }
         else {
             //  setValue(value + btnValue)
            // It show what we write it show on screen 
            setValue(value + btnValue);
        }
    };

    return (
        <div className="calculator">
            <input type="text" id="inputbox" value={value} placeholder="0" readOnly />

            <div>
                <button style={{ backgroundColor: "#ef233c", color: "white" }} className="operator ac" onClick={handleClick}>AC</button>
                <button style={{ backgroundColor: "#adb5bd", color: "black" }} className="operator del" onClick={handleClick}>DEL</button>
                <button style={{ backgroundColor: "#adb5bd", color: "black" }} className="operator percent" onClick={handleClick}>%</button>
                <button className="operator" onClick={handleClick}>/</button>
            </div>

            <div>
                <button onClick={handleClick}>7</button>
                <button onClick={handleClick}>8</button>
                <button onClick={handleClick}>9</button>
                <button className="operator" onClick={handleClick}>*</button>
            </div>

            <div>
                <button onClick={handleClick}>4</button>
                <button onClick={handleClick}>5</button>
                <button onClick={handleClick}>6</button>
                <button className="operator" onClick={handleClick}>+</button>
            </div>

            <div>
                <button onClick={handleClick}>1</button>
                <button onClick={handleClick}>2</button>
                <button onClick={handleClick}>3</button>
                <button className="operator" onClick={handleClick}>-</button>
            </div>

            <div>
                <button onClick={handleClick}>00</button>
                <button onClick={handleClick}>0</button>
                <button onClick={handleClick}>.</button>
                <button className="equalbtn" onClick={handleClick}>=</button>
            </div>
        </div>
    );
};