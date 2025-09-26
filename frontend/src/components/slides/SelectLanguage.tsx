import { useContext } from "react"
import  { firstUpperCase, languages, type Language } from "../constants"
import { LearningContext } from "../LearningContext"
import Navigation from "../Navigation"


const SelectLanguage = () => {
    const {language, setLanguage } = useContext(LearningContext)

    const handleChange = (language: Language) => {
        setLanguage(language)
    }

    return (
    <div>
        <fieldset>
            <legend> What language would you like to learn? </legend>
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
        </fieldset>
        <Navigation />
    </div>)
}

export default SelectLanguage