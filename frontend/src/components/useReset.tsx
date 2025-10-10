import { useContext } from "react"
import { LearningContext } from "./utils/LearningContext"


const useReset = (page: number) => {
    const { setSlide, setLanguage, setLevel, setTopics, setQuiz } = useContext(LearningContext)
    const reset = () => {
        setSlide(page)
        setLanguage("english")
        setLevel("beginner")
        setTopics([])
        setQuiz({"questions": []})
    }
    return reset
}

export default useReset;
