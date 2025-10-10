import { useContext } from "react"
import  { firstUpperCase, languages, type Language } from "../utils/constants"
import { LearningContext } from "../utils/LearningContext"
import Navigation from "../utils/Navigation"


const SelectLanguage = () => {
    const {language, slide, setLanguage } = useContext(LearningContext)

    const handleChange = (language: Language) => {
        setLanguage(language)
    }

    return (
    <div className="slide">
        <fieldset>
            {/* <legend> What language would you like to learn? </legend> */}
            <legend> Pick a language </legend>
            {
                languages.map((value, ix) => (
                    <label key={ix} htmlFor={value}>
                        <input
                            type="radio"
                            id={value}
                            name={value}
                            value={value}
                            checked={language === value}
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

export default SelectLanguage