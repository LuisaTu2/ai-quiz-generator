import { useContext } from "react"
import "./Navigation.css"
import { LearningContext } from "./LearningContext"


const Navigation = () => {
    const {slide, setSlide} = useContext(LearningContext)

    return (
        <div className="nav-buttons">
            <button className="nav-button nav-button-secondary" onClick={() => {
                setSlide(slide - 1)}}> Previous </button>
            <button className="nav-button nav-button-primary"
                // disabled={option === undefined}
                onClick={() => {setSlide(slide + 1)}}
            > Next </button>
        </div>
    )
}

export default Navigation

