import { useContext } from "react"
import Welcome from "./slides/Welcome"
import SelectLanguage from "./slides/SelectLanguage"
import SelectLevel from "./slides/SelectLevel"
import SelectTopics from "./slides/SelectTopics"
import { LearningContext } from "./LearningContext"
import Loader from "./loaders/Loader"
import "./HomePage.css"
import "./slides/Slides.css"
import Quiz from "./quiz/Quiz"
import CelebrationPage from "./CelebrationPage"
import ErrorPage from "./ErrorPage"
import CreditBubble from "./CreditBubble"


const HomePage = () => {
    const {slide, isLoading, quiz, error } = useContext(LearningContext)
    const showWelcomePage = slide === 0 && !isLoading && Object.keys(quiz["questions"]).length === 0;
    // const showLoader = slide == 0 && isLoading;
    const showQuiz = slide == 0 && !isLoading && Object.keys(quiz["questions"]).length !== 0;
    // implement a reset if navigating back to home page


    return (
        <div className="app-container">
            <div className="app-title">chisme</div>
            <div className="app-subtitle"> an AI-powered language learning app </div>
            <div className="app-modules-container">
                { showWelcomePage &&  <Welcome /> }
                {/* { showLoader && <Loader />} */}
                { slide == 1 && <SelectLanguage /> }
                { slide == 2 && <SelectLevel />}
                { slide == 3 && <SelectTopics />}
                { slide == 4 && <Loader />}
                { slide === 5 && <CelebrationPage />}
                { showQuiz && <Quiz /> }
                { !showQuiz && <CreditBubble />}
                { error && <ErrorPage />}
            </div>
            
        </div>
    )
}

export default HomePage