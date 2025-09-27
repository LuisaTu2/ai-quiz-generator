import { useContext } from "react"
import { LearningContext } from "../LearningContext"
import "./Welcome.css"
import PlantLoader from "../loaders/PlantLoader"

const Welcome = () => {
    const {setSlide} = useContext(LearningContext)

    return (<div className="app-welcome">
        <div className="app-welcome-description"> 
            <p>Ready to practice your favourite language? </p>
            <p> Create custom quizzes based on your interests and test your knowledge today!</p>
        </div>
        <PlantLoader />
        <button className="button" onClick={()=> setSlide(1)}>I'm ready to learn!</button>

    </div>)
}

export default Welcome