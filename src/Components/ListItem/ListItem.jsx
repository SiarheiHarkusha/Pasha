import "./ListItem.css"
import { Counter } from "../Counter/Counter"

export const ListItem = () => {
    const randomNumbers = [1,34,1203,23,73]
    return (

    <div className='black_style'>
         {randomNumbers.map((item) => <Counter startValue={item} key = {item} /> )}
    </div>

    )
}