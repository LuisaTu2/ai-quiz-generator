import { useContext } from "react";
import { LearningContext } from "../LearningContext";
import "./Loader.css";
import { firstUpperCase } from "../constants";

const Loader = () => {
  const {language, level, topics } =  useContext(LearningContext)
  const l = topics.length

  return (
    <>
    <div className="quiz-loader">
      <div>
        Great, just a moment while we get your quiz ready! 
      </div>
      <div> 
        We will be learning <span className="loader-highlight">{firstUpperCase(language)}</span>&nbsp;
        at &nbsp;{ level === "beginner" ? <span> a </span> : <span> an </span> } 
        <span className="loader-highlight">&nbsp;{level}</span> level.
      </div>
      { l > 0 && 
        <div>
          Topics will cover&nbsp;
          {topics.map((topic, ix) => (
              <span key={ix} className="loader-highlight">
                {topic}
                <span>{ ix === l - 1 ? <span>.</span> : <span> and </span> }</span>
              </span>
          ))}
      </div>}
      </div>
      <div className="plant-loaders">
        <span>🪴</span>
        <span>🪴</span>
        <span>🪴</span>
      </div>
    </>
  );
};

export default Loader;
