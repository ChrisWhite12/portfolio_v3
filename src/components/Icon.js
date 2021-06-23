import React, { useEffect, useState } from 'react'
import {useGlobalState} from '../config/store';

const Icon = ({img, idName, name}) => {

    const {store} = useGlobalState()
    const {icons,iconsOff} = store
    const [iconStyle,setIconStyle] = useState()

    useEffect(() => {
        if(icons.includes(name)){
            setIconStyle({
                'animation': 'icon_hover_in 1s linear 0s 1 normal both'
            });
        }
        else if(iconsOff.includes(name)){
            // console.log('mouse leave ', name)
            setIconStyle({
                'animation': 'icon_hover_out 1s linear 0s 1 normal both'
            });            
        }
    },[icons,iconsOff,name])

    return (
        <img src={img} alt={name} id={idName} style={iconStyle}></img>
    )
}

export default Icon


