import React, { useState } from 'react';
import './calculator.css';
import symbols from './symbols';

function Calculator() {
    const [displayValue, setdisplay] = useState('');
    const [number1, setnumber1] = useState('');
    const [opt, setopt] = useState('');

    function factorial(n) {
        let t = 1;
        while (n>1){
            t = t * n--;
        }
        return t;
    }

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
            case 'log b n':
            case 'nCr':
                if(displayValue.toString().indexOf('.')===-1 || displayValue.toString().indexOf('.')!==displayValue.length-1){
                    setnumber1(displayValue);
                    setdisplay('');
                    setopt(operation);
                }
                break;
            case 'n!':
            case 'sin(x)':
            case 'cos(x)':
            case 'tan(x)':
            case 'cot(x)':
            case 'sec(x)':
            case 'cosec(x)':
            case 'Inv(sin(x))':
            case 'Inv(cos(x))':
            case 'Inv(tan(x))':
            case 'Inv(cot(X))':
            case 'Inv(sec(x))':
            case 'Inv(cosec(x))':
                let calc = ''
                switch (operation){
                    case 'n!':
                        calc = parseInt(factorial(parseInt(displayValue)))
                        break;
                    case 'sin(x)':
                        calc = Math.sin(parseFloat(displayValue))
                        break;
                    case 'cos(x)':
                        calc = Math.cos(parseFloat(displayValue))
                        break;
                    case 'tan(x)':
                        calc = Math.tan(parseFloat(displayValue))
                        break;
                    case 'cot(x)':
                        calc = 1 / Math.tan(parseFloat(displayValue))
                        break;
                    case 'sec(x)':
                        calc = 1 / Math.cos(parseFloat(displayValue))
                        break;
                    case 'cosec(x)':
                        calc =  1 / Math.tan(parseFloat(displayValue))
                        break;
                    case 'Inv(sin(x))':
                        calc = Math.asin(parseInt(displayValue))
                        break;
                    case 'Inv(cos(x))':
                        calc = Math.acos(parseFloat(displayValue))
                        break;
                    case 'Inv(tan(x))':
                        calc = Math.atan(parseFloat(displayValue))
                        break;
                    case 'Inv(cot(x))':
                        calc = 1 / Math.atan(parseFloat(displayValue))
                        break;
                    case 'Inv(sec(x))':
                        calc = 1 / Math.acos(parseFloat(displayValue))
                        break;
                    case 'Inv(cosec(x))':
                        calc = 1 / Math.asin(parseFloat(displayValue))
                        break;
                    default:
                        console.log("Valid Operator not Selected")
                }
                setdisplay(calc)
                setnumber1('')
                setopt('')
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
                        case 'log b n':
                            ans = Math.log10(parseFloat(displayValue))/Math.log10(parseFloat(number1))
                            break;
                        case 'nCr':
                            ans = parseInt(factorial(parseInt(number1))) / parseInt((factorial(parseInt(number1-displayValue)) * factorial(displayValue)))
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