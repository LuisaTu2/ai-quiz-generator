import useReset from "../useReset";
import "./CelebrationPage.css";
import { useContext } from "react";
import { LearningContext } from "./LearningContext";
import { saveQuizAsPDF } from "./SaveQuiz";
import getQuizData from "./getQuizData";


const CelebrationPage = () => {
    const {language, level, topics, quiz, setQuiz, setSlide, setIsLoading, setError } = useContext(LearningContext)
    const reset = useReset(1);

    return <div className="congratulations-container"> 
                {/* <div className="plant-celebrate"><span>🪴</span></div> */}
                        <div className="plant-celebrate">
                <span>
                    🪴
                </span>
            </div>
            <div className="congratulations-greet"> 
                Congratulations!
            </div>

            <div className="congratulations-encouragement">
                Great work on completing the quiz! You are now one step closer to mastering a new language.
                Don't forget to save your progress so you can review it anytime! 
            </div>
            <div className="congratulations-download">
                <div className="congratulations-download-text">
                    {/* Make sure to save your progress so you can review it at a later time. */}
                </div>
                <button className="download-btn" onClick={() => saveQuizAsPDF(quiz)}>
                    download quiz as PDF 📄
                </button>
            </div>
            <div className="congratulations-keep-learning">
                Now keep learning - choose an option below!
            </div>

            <div className="congratulations-footer"> 
                <button className="footer-btn footer-btn-primary" onClick={() => {
                    setQuiz({"questions": []})
                    // trigger again
                    setSlide(4)
                    getQuizData({language, level, topics, setIsLoading, setQuiz, setSlide, setError})
                }} > 
                    take another quiz 
                </button> 
                <button className="footer-btn footer-btn-secondary" onClick={reset} > 
                    learn a new language 
                </button> 
            </div> 
        </div>
}


export default CelebrationPage
