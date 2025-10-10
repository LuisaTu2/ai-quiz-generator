import { useEffect, useState } from "react"
import type { QuestionType } from "../utils/constants";

interface Props {
    position: number
    data: QuestionType
    correctAnswers: string[]
    setCorrectAnswers: React.Dispatch<React.SetStateAction<string[]>>
}

const Question: React.FC<Props>  = ({ data, position, correctAnswers, setCorrectAnswers }) => {
    const [selectedOption, setSelectedOption] = useState<string>("");
    const {question, options, answer} = data
    // console.log("selected option:", selectedOption,"answer: ", answer)

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
        const value = e.target.value
        setSelectedOption(value)
    }

    useEffect(() => {
        if (selectedOption !== answer && correctAnswers.includes(answer)){
            const temp = [...correctAnswers].filter(item => item !== answer)
            setCorrectAnswers(temp)
        } else if (selectedOption === answer){
            const temp = [...correctAnswers]
            temp.push(answer)
            setCorrectAnswers(temp)
        }
    }, [selectedOption])


    return (
        <div className="options">
            <h5>{position + 1}. {question}</h5>
            <ul>
                {
                    options.map((option, ix) => {
                        return (
                            <label key={ix}>
                                <div className="option-line">
                                    <input  
                                        type="radio"
                                        name={question}
                                        value={option}
                                        checked={selectedOption === option}
                                        onChange={handleOnChange}
                                    />
                                    {option}
                                    {
                                        selectedOption === option ?
                                            option === answer ? <div>✅</div> : <div>❌</div>
                                        : <></>
                                    }
                                </div>
                            </label>
                    )
                    })
                }   
            </ul>
        </div>
    )
}

export default Question