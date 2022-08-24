import React from 'react';
import "./Question.css";

const Questions = () => {
    return (
        <div>
            <div className="Question_heading">
                Frequently Asked
                <span className={"question"}>
                    Question
                </span>
            </div>
            <div className="question_Answer_wrap">
                <div className="question_Answer">
                    <span className="questions">1. What are two things you can never eat for breakfast?  </span>
                    <span className="Answer">A. Lunch and Dinner</span>
                </div>
                <div className="question_Answer">
                    <span className="questions">2. What is always coming but never arrives? </span>
                    <span className="Answer">B. Tomorrow</span>
                </div>
                <div className="question_Answer">
                    <span className="questions">3. What gets wetter the more it dries? </span>
                    <span className="Answer">C. A towel</span>
                </div>
                <div className="question_Answer">
                    <span className="questions">4. What can be broken but never held? </span>
                    <span className="Answer">D. A promise</span>
                </div>
                <div className="question_Answer">
                    <span className="questions">5. What word is spelled incorrectly in every single dictionary?</span>
                    <span className="Answer">E. Incorrectly</span>
                </div>
                <div className="question_Answer">
                    <span className="questions">6. What is it that lives if it is fed, and dies if you give it a drink?</span>
                    <span className="Answer">F. Fire</span>
                </div>
            </div>
        </div>
    );
};

export default Questions;