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
                if(displayValue.indexOf('.')==-1) {
                    setdisplay(displayValue + operation);
                }
                break;
            case '+':
            case '-':
            case 'x':
            case '/':
                if(displayValue.indexOf('.')==-1 || displayValue.indexOf('.')==displayValue.length-1){
                    setnumber1(displayValue);
                    setdisplay('');
                    setopt(operation);
                }
                break;
            case '=':
                if(displayValue.indexOf('.')==-1 || displayValue.indexOf('.')==displayValue.length-1){
                    switch(opt){
                        case '+':
                            setdisplay(''+parseFloat(number1)+parseFloat(displayValue));
                            break;
                        case '-':
                            setdisplay(''+parseFloat(number1)-parseFloat(displayValue));
                            break;
                        case 'x':
                            setdisplay(''+parseFloat(number1)*parseFloat(displayValue));
                            break;
                        case '/':
                            if (parseFloat(displayValue)==0){
                                setdisplay('Cannot divide by 0');
                            }
                            else {
                                setdisplay(''+parseFloat(number1)/parseFloat(displayValue));
                            }
                            break;
                        default:
                            console.log('No proper operator selected');
                    }
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
                        <button className={"btn"} key={n.id} onClick={() => performOperation(n.value)} >{n.value}</button>
                    ))
                }
            </div>
           );
}

export default Calculator;