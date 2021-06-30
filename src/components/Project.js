import React from 'react'
import {useGlobalState} from '../config/store';

const Project = (props) => {
    const {dispatch} = useGlobalState()

    const handleMouseEnter = () => {
        dispatch({
            type: "setIcons",
            data: props.data["skills"]
        })
    }
    
    const handleMouseLeave = () => {
        dispatch({
            type: "setIconsOff",
            data: props.data["skills"]
        })
    }

    return (
        <div className="project_item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {/* <div className='imgCont'> */}
                {props.data["img"] ? <img src={props.data["img"]} alt="Project" className="project_img"></img> : <p>No image</p>}
            {/* </div> */}
            <div className="project_description">
                <h2 className="project_title">{props.data["title"]}</h2>
                <p className="project_text">{props.data["desc"]}</p>
                <div className="project_links">
                    {props.data["github"] ? <a className='github_link' href={props.data["github"]}>GitHub</a> : <p className='github_link'></p>}
                    {(props.data["livesite"]) ? <a className='site_link' href={props.data["livesite"]}>Live Site</a>: <p className='site_link'></p>}
                    {props.data['video'] ? <div className="video_btn" onClick={() => props.handleVideoClick(props.data['video'])}>Video</div>: <p className="video_btn"></p>}
                </div>
            </div>
        </div>
    )
}

export default Project