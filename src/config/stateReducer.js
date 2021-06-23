/* eslint-disable */
export default function (state, action) {
    // console.log(state)
    switch(action.type) {
        case "setIcons": {
            return {
                ...state,
                icons: action.data
            }
        }
        case "setIconsOff": {
            return {
                ...state,
                iconsOff: action.data
            }
        }
        default: 
            return state
    }
}