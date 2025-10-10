import { useContext } from "react"
import { LearningContext } from "./LearningContext"
import "./ErrorPage.css"
import useReset from "../useReset";

const ErrorPage = () => {
    const {setError} = useContext(LearningContext);
    const reset = useReset(1);

    const handleOnClick = () => {
        setError(false);
        reset();
    }

    return (<div className="error-page-container">
        <div><i>Oops, something went wrong!</i></div> 
        <div>
            {/* <i> */}
                We are sorry things didn't go as expected, let's try learning again!
            {/* </i> */}
        </div>
        <button className="button button-secondary" onClick={handleOnClick}>
            I want to keep learning!     
        </button>  
    </div>
)}

export default ErrorPage