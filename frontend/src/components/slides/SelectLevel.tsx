import { useContext } from "react"
import  {firstUpperCase, levels, type Level } from "../utils/constants"
import { LearningContext } from "../utils/LearningContext"
import Navigation from "../utils/Navigation"


const SelectLevel = () => {
    const {level, slide, setLevel } = useContext(LearningContext)

    const handleChange = (level: Level) => {
        setLevel(level)
    }

    return (
    <div className="slide">
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
            <div className="slide-count">{slide} / 3 </div>
        </fieldset>
        
        <Navigation />
    </div>)
}

export default SelectLevel