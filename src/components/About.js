import React from 'react'

const About = () => {
    return (
        <div className="main_sec">
            <h1>About</h1>
            <img src="./profile.jpg" alt="Chris White" className="about_img"></img>
            <div className="about_text">
                <p>Chris has previous experience in Electronics Engineering where he had learned 
                software skills with Embedded programming using C++ language. He decided to move 
                onto web development as he had done some research into React Native, which seemed 
                complicated at the time, but then discovered other topics such as JS and Rails.</p>
                <p>He had enrolled and completed a Diploma of IT at Coder Academy, where he had 
                    learnt languages such as Ruby, Ruby on Rails, Javascript, Html, Css, React and Mongo DB</p>
                <p>My Resume: <a href="./Resume.pdf">Link</a></p>
            </div>
        </div>
    )
}

export default About