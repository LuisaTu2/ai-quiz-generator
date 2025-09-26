import { useContext, useState } from "react"
import  {HTTP_PATH, topicOptions, type Topic } from "../constants"
import { LearningContext } from "../LearningContext"


const SelectTopics = () => {
    const  {language, level, topics,slide, setSlide, setQuiz, setIsLoading,setTopics, setError} = useContext(LearningContext)
    const [userTopics, setUserTopics] = useState<Topic[]>(topics || [])

    const getQuizData = async () => {
        setIsLoading(true)

        for (let i = 0; i < 3; i++){
            try {
                const response = await fetch(`${HTTP_PATH}?language=${language}&level=${level}&topic=${topics}`);
                const result = await response.json();
                
                if (result){
                    setQuiz(prev => ({ ...prev, ...result }));
                    setIsLoading(false);
                    setSlide(0);
                    break
                }
            } catch (error) {
                console.error(error);
                if(i === 2){
                    setSlide(0)
                    setError(true)
                }
            }
            //  finally {
                
            // }
            // setTimeout(() => {
            //     setSlide(0)
            //     setError(true)
            // }, 4000)
        }

    }

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
        setTopics(topics)
        getQuizData();
        setSlide(4)
    }


    return (
    <div>
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
        </fieldset>

        <div className="nav-buttons">
            <button className="button nav-button" 
                    onClick={() => {
                    setSlide(slide - 1)}}> 
                        Previous 
                </button>
            <button
                className="button nav-button"
                disabled={topics === undefined || !topics.length}
                onClick={() => handleOnClick()}
            > Next </button>
        </div>
    </div>)
}

export default SelectTopics