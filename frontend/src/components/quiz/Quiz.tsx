import { useContext, useEffect, useState } from "react"
import { LearningContext } from "../utils/LearningContext";
import Question from "./Question";
import "./Quiz.css";
import useReset from "../useReset";


const Quiz = () => {
    const { quiz, setSlide } = useContext(LearningContext)
    const questions = quiz["questions"]
    const reset = useReset(0);
    const [correctAnswers, setCorrectAnswers] = useState<string[]>([])
    const allCorrect = correctAnswers.length === questions.length

    useEffect(() => {
        if (allCorrect){
            setTimeout(() => {
                setSlide(6)
            }, 2000)
        }
    }, [allCorrect])

    return (
        <div className="quiz">
            <ul>
                {questions.map((q, ix) => {
                    return (<Question key={ix} position={ix} data={q} correctAnswers={correctAnswers} setCorrectAnswers={setCorrectAnswers}/>)
                })}
            </ul>
            <div className="quiz-home-btn">
                <button className={`button ${allCorrect ? "disabled-btn" : "" }`} onClick={reset} disabled={allCorrect} >
                    home
                </button>
            </div>
        </div>
    )
}

export default Quiz