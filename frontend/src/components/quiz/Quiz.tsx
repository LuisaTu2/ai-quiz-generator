import { useContext, useEffect, useState } from "react"
import { LearningContext } from "../LearningContext";
import Question from "./Question";
import "./Quiz.css";
import useReset from "../useReset";


const Quiz = () => {
    const { quiz, setSlide } = useContext(LearningContext)
    const questions = quiz["questions"]
    const reset = useReset(0);
    const [correctAnswers, setCorrectAnswers] = useState<string[]>([])

    useEffect(() => {
        if (correctAnswers.length === questions.length){
            setTimeout(() => {
                setSlide(5)
            }, 500)
        }
    }, [correctAnswers])

    return (
        <div className="quiz">
            <ul>
                {questions.map((q, ix) => {
                    return (<Question key={ix} position={ix} data={q} correctAnswers={correctAnswers} setCorrectAnswers={setCorrectAnswers}/>)
                })}
            </ul>
            <div className="quiz-home-btn">
                <button className="button" onClick={reset} >
                    Home
                </button>
            </div>
        </div>
    )
}

export default Quiz