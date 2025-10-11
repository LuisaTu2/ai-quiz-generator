import { useEffect, useState } from "react";
import "./FeedbackBubble.css";
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from "./constants";
import emailjs from "emailjs-com";

const FeedbackBubble = () => {
    // const { language, level, topics, slide } =  useContext(LearningContext);
    const [ collapsed, setCollapsed ] = useState<boolean>(false);
    const [ showForm, setShowForm ] = useState<boolean>(false);

    // show on load
    useEffect(() => {
        const timer = setTimeout(() => setCollapsed(true), 5000); 
        return () => clearTimeout(timer);
    }, []);

    const sendEmail = (e: any) => {
            e.preventDefault();
            emailjs.sendForm(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            e.target,
            EMAILJS_PUBLIC_KEY
        )
        .then((result) => {
            console.log(result.text);
            alert("Message sent successfully!");
        }, (error) => {
            console.log(error.text);
            alert("Oops, something went wrong!");
        });

        e.target.reset();
    };


    // show bubble every 20 seconds
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setShowForm(true);
    //         setTimeout(() => {
    //             setShowForm(false)
    //         }, 5000)
    //     }, 30000);

    //     return () => clearInterval(interval);
    // }, []);


    return (
        <div className="feedback-container">
            <div className={`${collapsed ? "feedback-bubble bubble" : "feedback-bubble bubble-contact-text"}`} 
                onClick={() => {setShowForm(!showForm)}}
                onMouseEnter={() => {if(!showForm){setCollapsed(false)}}}
                onMouseLeave={() => {setCollapsed(true)}}
                > 
                {collapsed ?  <span>✉️</span> : <span>send feedback ✉️</span>}
            </div>  

            {
                showForm && 
                // <div className="feedback-form">
                    <form onSubmit={sendEmail} className="feedback-form">
                        <div className="close-btn" onClick={() => setShowForm(false)}>x</div>
                        <div className="feedback-form-text"> 
                            Have feedback or just want to connect?
                            Send me a quick message — I will get back to you soon!
                        </div> 
                        <input type="text" name="user_name" placeholder="Your name" required />
                        <input type="email" name="user_email" placeholder="Your email" required />
                        <textarea name="message" placeholder="Your message" required></textarea>
                        <button type="submit">Send</button>
                    </form>
                // </div>
            }
        </div>
);
};

export default FeedbackBubble;
