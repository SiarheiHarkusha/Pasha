import './Counter.css';
import { useState } from 'react';

export const Counter = ({startValue}) => {

    const [value, setValue] = useState(startValue)

    const setValuePlus = () => {
        setValue(() => value+1 )
    }
    const setValueMinus = () => {
        setValue(() => value-1) 
    }

    const clearAll = () => {
        setValue(0)
    }

    return (
        <div >
            <div className='block_main'>
                <div className='block_show_value' onClick ={clearAll}>{value}</div>
                <div className='block_buttons'>
                    <button className='block_plus' onClick={setValuePlus}>+</button>
                    <button className='block_minus' onClick={setValueMinus}>-</button>

                </div>
            </div>
        </div>
    )
} 