/* types */
export type Language = "english" | "french" | "italian" | "spanish" | "serbian"
export type Level = "beginner" | "intermediate" | "advanced"
export type Topic = "food" | "fashion" | "travel" | "space"
 | "geography" | "sports" | "nature" 


export interface LearningOptions {
    language?: Language
    level?: Level
    topics?: Topic[]
}


export interface QuestionType {
    question: string
    options: string[]
    answer: string
}
 
export interface Quiz {
    questions: QuestionType[]
}


/* constants */
export const languages: Language[] =  ["english", "french", "italian", "serbian", "spanish"] 
export const levels: Level[] = ["beginner", "intermediate", "advanced"]
export const topicOptions: Topic[] = ["fashion", "food", "geography", "nature", "space", "sports", "travel"]

export const HTTP_PATH: string = "http://18.216.159.247/learn-api/"

export const firstUpperCase = (s: string) => {
    if (s === ""){
        return s
    }
    const firstLetter = s[0];
    return firstLetter.toUpperCase() + s.slice(1) 
}



