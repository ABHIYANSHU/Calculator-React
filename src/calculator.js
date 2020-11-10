import React, { useState } from 'react';
import './calculator.css';

function InputBox() {
    const [displayValue, setdisplay] = useState('');
    const [operator, setoperator] = useState('');
    const [number1, setnumber] = useState(0);

    const listofnum = [1, 2, 3, 4, 5, 6, 7 , 8, 9, 0];

    function AddNumber(num1) {
        console.log(typeof this + ' : ' + num1);
        setnumber(num1);
        setoperator('+');
        setdisplay(0);
    }

    function DiffNumber(num1) {
        console.log(typeof this + ' : ' + num1);
        setnumber(num1);
        setoperator('-');
        setdisplay(0);
    }

    function MultiplyNumber(num1) {
        console.log(typeof this + ' : ' + num1);
        setnumber(num1);
        setoperator('x');
        setdisplay(0);
    }

    function DivideNumber(num1) {
        console.log(typeof this + ' : ' + num1);
        setnumber(num1);
        setoperator('/');
        setdisplay(0);
    }

    function AddDecimal(num1) {
        num1 = num1 + '.';
        console.log(typeof this + ' : ' + num1);
        setnumber(num1);
        setdisplay(num1);
    }

    function Equal(num2) {
        setnumber(parseFloat(number1));
        num2 = parseFloat(num2);
        console.log('Number 1 : ' + number1);
        console.log('Number 2 : ' + num2);
        switch (operator) {
            case '+':
                setdisplay(number1 + num2);
                break;
            case '-':
                setdisplay(number1 - num2);
                break;
            case 'x':
                setdisplay(number1 * num2);
                break;
            case '/':
                if(num2 == 0){
                    setdisplay("Cannot Divide by 0");
                }
                else{
                    setdisplay(number1 / num2);
                }
                break;
            default:
                setdisplay(displayValue);
        }
        setoperator('');
    }

    function SetNumber(num) {
        setdisplay('' + displayValue + num);
    }

    function Clear() {
        SetNumber(0);
        setdisplay(0);
        setoperator('');
    }

    return (
            <div className="container">
                <input type="textbox" className="display" onChange={(e) => setdisplay(e.target.value)} value={displayValue} readOnly />
                <br/>
                {
                    listofnum.map(n => (
                        <button className="btn" key={n} onClick={() => SetNumber(parseFloat(n))} >{n}</button>
                    ))
                }

                <button className="btn" onClick={() => AddDecimal(parseFloat(displayValue))} >.</button>
                <button className="btn" onClick={() => AddNumber(parseFloat(displayValue))} >+</button>
                <button className="btn" onClick={() => DiffNumber(parseFloat(displayValue))} >-</button>
                <button className="btn" onClick={() => MultiplyNumber(parseFloat(displayValue))} >x</button>
                <button className="btn" onClick={() => DivideNumber(parseFloat(displayValue))} >/</button>
                <button className="btn" onClick={() => Equal(parseFloat(displayValue))} >=</button>
                <button className="btn clear" onClick={() => Clear()} >Clear</button>
            </div>
           );
}

export default InputBox;