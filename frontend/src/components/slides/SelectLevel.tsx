import { useContext } from "react"
import  {firstUpperCase, levels, type Level } from "../constants"
import { LearningContext } from "../LearningContext"
import Navigation from "../Navigation"


const SelectLevel = () => {
    const {level, setLevel } = useContext(LearningContext)

    const handleChange = (level: Level) => {
        setLevel(level)
    }

    return (
    <div>
        <fieldset>
            <legend> What level would you like to practice? </legend>
            {
                levels.map((value, ix) => (
                    <label key={ix} htmlFor={value}>
                        <input
                            type="radio"
                            id={value}
                            name={value}
                            value={value}
                            checked={level === value}
                            onChange={() => handleChange(value)} 
                        />
                        {firstUpperCase(value)}
                    </label>
                ))
            }
        </fieldset>

        <Navigation />
        {/* <button onClick={() => {
            setSlide(1)}}> Previous </button>
        <button 
            disabled={level === undefined}
            onClick={() => {setSlide(3)}}
        > Next </button> */}
    </div>)
}

export default SelectLevel