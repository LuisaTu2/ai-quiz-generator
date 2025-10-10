import { useContext, useState } from "react"
import  { topicOptions, type Topic } from "../utils/constants"
import { LearningContext } from "../utils/LearningContext"
import getQuizData from "../utils/getQuizData"


const SelectTopics = () => {
    const  {language, level, topics,slide, setSlide, setQuiz, setIsLoading,setTopics, setError} = useContext(LearningContext)
    const [userTopics, setUserTopics] = useState<Topic[]>(topics || [])

    const handleChange = (topic: Topic) => {
        let updatedTopics = [...userTopics]
        if (userTopics.includes(topic)){
            updatedTopics = updatedTopics.filter(t => t !== topic)
            // setTopics(topics.filter(t => t !== topic))
        } else {
            updatedTopics.push(topic)
            // setTopics(topics => [...topics, topic])
        }
        setUserTopics(updatedTopics)
        setTopics(updatedTopics)
    }

    const handleOnClick = () => {
        getQuizData({language, level, topics, setIsLoading, setQuiz, setSlide, setError})
        setSlide(4)
    }


    return (
    <div className="slide">
        <fieldset>
            <legend> 
                <div className="app-topics-label">
                    What topics are you interested in?
                    <span> *select up to 3 topics</span>
                </div>
                 </legend>
            {
                topicOptions.map((value, ix) => (
                    <label htmlFor={value} key={ix}>
                        <input
                            type="checkbox"
                            id={value}
                            name={value}
                            value={value}
                            disabled={!userTopics.includes(value) && userTopics.length >= 3}
                            checked={userTopics.includes(value)}
                            onChange={() => handleChange(value)} 
                        />
                        {value}
                    </label>
                ))
            }
            <div className="slide-count">{slide} / 3 </div>
        </fieldset>

        <div className="nav-buttons">
            <button className="nav-button nav-button-secondary" 
                    onClick={() => {
                    setSlide(slide - 1)}}> 
                        Previous 
                </button>
            <button
                className="nav-button nav-button-primary"
                disabled={topics === undefined || !topics.length}
                onClick={() => handleOnClick()}
            > Next </button>
        </div>
    </div>)
}

export default SelectTopics