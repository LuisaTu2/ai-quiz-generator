import useReset from "./useReset";
import "./CelebrationPage.css";


const CelebrationPage = () => {
    const reset = useReset(1);

    return <div className="congratulations-container"> 
            <div className="congratulations-text">
                <div className="congratulations-with-plants">
                    <div className="plant-celebrate"><span>🪴</span></div>
                    <p>Well done, <span className="loader-highlight">congratulations</span>!</p>
                    <div className="plant-celebrate"><span>🪴</span></div>
                </div>
                <div><i>To learn a language is to have one more window from which to look at the world </i></div>
                <div><i> Chinese Proverb</i></div>
            </div> 

            <div className=""> 
                <button className="button" onClick={reset} > I want to keep learning! </button> 
            </div> 

        </div>
}


export default CelebrationPage
