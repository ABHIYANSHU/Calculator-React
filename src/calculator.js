import React, { useState } from 'react';
import './calculator.css';
import symbols from './symbols';

function Calculator() {
    const [displayValue, setdisplay] = useState('');
    const [number1, setnumber1] = useState('');
    const [opt, setopt] = useState('');

    function performOperation(operation) {
        switch(operation) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                setdisplay(displayValue + operation);
                break;
            case '.':
                if(displayValue.toString().indexOf('.')===-1) {
                    setdisplay(displayValue + operation);
                }
                break;
            case '+':
            case '-':
            case 'x':
            case '/':
            case 'x^y':
                if(displayValue.toString().indexOf('.')===-1 || displayValue.toString().indexOf('.')!==displayValue.length-1){
                    setnumber1(displayValue);
                    setdisplay('');
                    setopt(operation);
                }
                break;
            case '=':
                if(displayValue.toString().indexOf('.')===-1 || displayValue.toString().indexOf('.')!==displayValue.length-1){
                    var ans='';
                    console.log(displayValue.toString().indexOf('.'));
                    switch(opt){
                        case '+':
                            ans = parseFloat(number1)+parseFloat(displayValue);
                            break;
                        case '-':
                            ans = parseFloat(number1)-parseFloat(displayValue);
                            break;
                        case 'x':
                            ans = parseFloat(number1)*parseFloat(displayValue);
                            break;
                        case '/':
                            if (parseFloat(displayValue)===0.0){
                                ans = 'Cannot Divide by 0';
                            }
                            else {
                                ans = parseFloat(number1)/parseFloat(displayValue);
                            }
                            break;
                        case 'x^y':
                            ans = Math.pow(parseFloat(number1), parseFloat(displayValue))
                            break;
                        default:
                            console.log('No proper operator selected');
                    }
                    setdisplay(''+ans);
                    setnumber1('');
                    setopt('');
                }
                break;
            case 'C':
                setdisplay('');
                setnumber1('');
                setopt('');
                break;
            default:
                console.log("Select a Valid Operator");
        }
    }

    return (
            <div className="container">
                <input type="textbox" className="display" value={displayValue} readOnly />                
                {
                    symbols.map(n => (
                        <button className={n.id===16 ? "btn large":"btn"} key={n.id} onClick={() => performOperation(n.value)} >{n.value}</button>
                    ))
                }
            </div>
           );
}

export default Calculator;