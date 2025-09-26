import { useContext } from "react"
import "./Navigation.css"
import { LearningContext } from "./LearningContext"


const Navigation = () => {
    const {slide, setSlide} = useContext(LearningContext)

    return (
        <div className="nav-buttons">
            <button className="button nav-button" onClick={() => {
                setSlide(slide - 1)}}> Previous </button>
            <button className="button nav-button"
                // disabled={option === undefined}
                onClick={() => {setSlide(slide + 1)}}
            > Next </button>
        </div>
    )
}

export default Navigation

