import React from 'react'

const Home = () => {
    const img_style = {
        backgroundImage: "linear-gradient(rgba(6, 3, 26, 0.5), rgba(6, 3, 26, 0.7)), url('./circuit-unsplash.jpg')"
    }

    return (
        <div className="main_sec main_img" style={img_style}>
        <div className="text_grid">
                <h1 className = 'letter_C1'>C</h1>
                <h1 className = 'letter_H1'>H</h1>
                <h1 className = 'letter_R1'>R</h1>
                <h1 className = 'letter_I1'>I</h1>
                <h1 className = 'letter_S1'>S</h1>

                <h1 className = 'letter_W2'>W</h1>
                <h1 className = 'letter_I2'>I</h1>
                <h1 className = 'letter_T2'>T</h1>
                <h1 className = 'letter_E2'>E</h1>
        </div>
    </div>
    )
}

export default Home