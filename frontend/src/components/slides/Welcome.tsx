import { useContext } from "react"
import { LearningContext } from "../LearningContext"
import Spinner from "../loaders/Spinner"
import "./Welcome.css"

const Welcome = () => {
    const {setSlide} = useContext(LearningContext)

    return (<div className="app-welcome">
        <button className="button" onClick={()=> setSlide(1)}>I'm ready to learn!</button>
        <Spinner />
    </div>)
}

export default Welcome