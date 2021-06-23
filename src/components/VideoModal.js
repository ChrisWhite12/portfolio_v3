import React from 'react'

const VideoModal = (props) => {
    return (
        <div className="videoModal">
            <iframe width="600" height="400"
            className='embVideo' 
            src={props.link} 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>

            <button className="videoClose" onClick={props.handleVideoCancel}>X</button>
        </div>
    )
};

export default VideoModal