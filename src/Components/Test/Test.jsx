import './Test.css'
import {useState} from 'react'

export const Test = ()=>{

    const [showTest,setShowTest] = useState(false)

    const showHi = () => {
        setShowTest(true) 
        console.log(showTest)
    }
    const deleteHi = () => {
        setShowTest(false) 
        console.log(showTest)
    }

    return(
        <>
            <div className='test_wrap'>
                <button onClick={showHi}>SHOW HI</button>
                <button onClick={deleteHi}>DELETE HI</button>
            </div>
            {showTest && <h1 style={{margin: '10px', fontSize: '20px', textAlign:'center', border:'2px solid black'}}>Hi</h1>}
        </>

    )
}



