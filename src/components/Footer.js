import React from 'react'

import * as Icons from 'react-bootstrap-icons'

const Footer = () => {
    return (
        <footer>
            <div className="logobar">
                <a target='_blank' rel='noreferrer' href="./Resume.pdf"><Icons.FileEarmarkPersonFill color='#d6f2f8' size={25} /></a>
                <a target='_blank' rel='noreferrer' href="https://github.com/ChrisWhite12"><Icons.Github color='#d6f2f8' size={25} /></a>
                <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/chriswhite16/"><Icons.Linkedin color='#d6f2f8' size={25} /></a>
                <a target='_blank' rel='noreferrer' href='mailto:chris_white_12@hotmail.com'><Icons.EnvelopeFill color='#d6f2f8' size={25} /></a>
            </div>
                
                
                
                
        </footer>
    )
}

export default Footer