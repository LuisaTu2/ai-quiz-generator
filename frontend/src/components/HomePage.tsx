import { useContext } from "react"
import Welcome from "./slides/Welcome"
import SelectLanguage from "./slides/SelectLanguage"
import SelectLevel from "./slides/SelectLevel"
import SelectTopics from "./slides/SelectTopics"
import { LearningContext } from "./utils/LearningContext"
import Loader from "./loaders/Loader"
import "./HomePage.css"
import "./slides/Slides.css"
import Quiz from "./quiz/Quiz"
import CelebrationPage from "./utils/CelebrationPage"
import ErrorPage from "./utils/ErrorPage"
import CreditBubble from "./utils/CreditBubble"
import { AnimatePresence } from "framer-motion"
import MotionDiv from "./utils/MotionDiv"


const HomePage = () => {
    const {slide, isLoading, quiz, error } = useContext(LearningContext)
    const showWelcomePage = slide === 0 && !isLoading && Object.keys(quiz["questions"]).length === 0;
    // const showLoader = slide == 0 && isLoading;
    const showQuiz = !isLoading && Object.keys(quiz["questions"]).length !== 0;
    // implement a reset if navigating back to home page


    return (
         <AnimatePresence mode="wait">
            <div className="app-container">
                <MotionDiv content={
                    <>
                    <div className="app-title">chisme</div>
                    <div className="app-subtitle"> your AI-powered language quiz generator </div>
                    </>
                }
                /> 
                <div className="app-modules-container">
                    { showWelcomePage && <MotionDiv content={<Welcome />} duration={2}/> }
                    { slide == 1 && <MotionDiv content={<SelectLanguage />} />  }
                    { slide == 2 && <MotionDiv content={<SelectLevel />} />  }
                    { slide == 3 && <MotionDiv content={<SelectTopics />} />  }
                    { slide == 4 && <MotionDiv content={<Loader />} duration={2}/>  }
                    { slide === 5 && showQuiz && <MotionDiv content={<Quiz />} duration={0.8}/>  }
                    { slide === 6 && <MotionDiv content={<CelebrationPage />} duration={3}/>  }

                    { !showQuiz && <CreditBubble />}
                    { error && <ErrorPage />}
                </div>
            

            {/* <div className="congratulations-quote">
                To learn a language is to have one more window from which to look at the world
            </div> */}
            {/* <div><i> Chinese Proverb</i></div> */}


            </div>
        </AnimatePresence>
    )
}

export default HomePage