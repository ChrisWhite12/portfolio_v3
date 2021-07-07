import React, { useState } from 'react'
import "../css/_projects.scss"
import Project from './Project'
// import {useGlobalState} from '../config/store';

import Icon from './Icon';
import VideoModal from './VideoModal';

const Projects = () => {
    const [modalOn, setModalOn] = useState(false)
    const [videoLink, setVideoLink] = useState('')

    const data = {
        "project1":{
            "img": "./project_img/App1.png",
            "title": "Subway Trip Planner",
            "desc": "Ruby terminal application made for a Coder Academy assignment. The application is designed it simulate a subway network and calculate paths for commuters to take. The user can enter origin, destination stations and time to leave and the application returns the path to take with which stations to change at and how many minutes to wait at each station.",
            "github": "https://github.com/ChrisWhite12/Subway-Trip-Planner",
            "skills": ["ruby"]
        },
        "project2":{
            "img": "./project_img/rails_pro.jpg",
            "title": "Hotel DB",
            "desc": "Rails application made for a Coder Academy assignment. The application is similar to other hotel database websites where owners can post their listing with a number of rooms and manage bookings. Customers can search for a booking by inputing the location, date and no. of people.",
            "github": "https://github.com/ChrisWhite12/HotelDB_Rails",
            "livesite": "https://cw12-hoteldirectory.herokuapp.com/",
            "skills": ["ruby","html","css"]
        },
        "project3":{
            "img": "./project_img/Covid.png",
            "title": "Covid-19 Graph",
            "desc": "Graph showing COVID-19 cases for Australia. Javascript is used to get the json file and display the information on a graph using chart.js. Pages shows both linear cases against time and logarithmic daily against cumulative.",
            "github": "https://github.com/ChrisWhite12/Covid_19_graph",
            "livesite": "https://chriswhite12.github.io/Covid_19_graph/",
            "skills": ["js", "html", "css"]
        },
        "project4": {
            "img": "./project_img/App_dash.jpg",
            "title": "Client Portal",
            "desc": "Client portal App for the MERN assessment. The MVP for the portal is that clients will be able to see their upcoming appointments, submit ticket requests to administration to change their appointments, view and edit their personal details. Cliniko requires a monthly fee, therefore the live site is not active. However the video link provides a demonstration.",
            "github": "https://github.com/ChrisWhite12/clientPortalApp_BE",
            "skills": ["mongo", "react","js", "html", "css"],
            "video": "https://www.youtube.com/embed/EQQOlMjdiMY"
        },
        "project5": {
            "title": "Internship",
            "desc": "The internship at Dingo consisted of working with 2 other students from Coder Academy on a proof-of-concept application. The tech stack was MERN which we had learnt in Coder Academy. The tasks that I worked on were CI/CD in gitlab, handling API data in backend, processing data and delivering it to the frontend, testing backend using Mocha.js and Chai.js and testing frontend with react-testing-library",
            "skills": ["mongo", "react", "js", "html", "css"],
            "img": "./project_img/Dingo.jpg"
        },
        "project6": {
            "title": "Habit Squares",
            "desc": "React Native app that uses firebase and redux to store habit information and display it on a calendar with authentication handled by Firebase's Google Signin. Expo Go has to be installed to view the live site",
            'skills': ['react', 'js', 'css', 'redux'],
            "img": "./project_img/reactNative2.png",
            "github": "https://github.com/ChrisWhite12/habit-tracker",
            "livesite": "https://expo.io/@chrisw12/Habit-Squares",
            "video": "https://www.youtube.com/embed/1u6hRNbXxNE"
        
        }
    }

    const handleVideoClick = (data) => {
        setModalOn(true)
        console.log('data',data);
        setVideoLink(data)
    }

    const handleVideoCancel = () => {
        setModalOn(false)
    }

    return (
        
        <div className="main_sec">
                <h1>Projects</h1>
                <div className="skills_icons">
                    <h3>Skills: </h3>
                    <Icon img="./Ruby-01.svg" name="ruby" idName="ruby_icon"/>
                    <Icon img="./CSS-3-01.svg" name="css" idName="css_icon"/>
                    <Icon img="./HTML-5-01.svg" name="html" idName="html_icon"/>
                    <Icon img="./JavaScript-01.svg" name="js" idName="js_icon"/>
                    <Icon img="./mongodb.svg" name="mongo" idName="mongo_icon"/>
                    <Icon img="./react.svg" name="react" idName="react_icon"/>
                    <Icon img="./redux.svg" name='redux' idName="redux_icon" />
                </div>
                {
                    modalOn ?
                    <div>
                        <VideoModal handleVideoCancel={handleVideoCancel} link={videoLink}/>
                    </div>:
                    <div className="project_list">
                        <Project data={data["project6"]} handleVideoClick={handleVideoClick}/>
                        <Project data={data["project4"]} handleVideoClick={handleVideoClick}/>
                        <Project data={data["project5"]} />
                        <Project data={data["project2"]} />
                        <Project data={data["project1"]} />
                    </div>
                }
        </div>
    )
}

export default Projects
