import { GamepadThumbstick, Control } from "../constants/control.js"

export const controls = [
    {
        gamePad: {
            [GamepadThumbstick.DEAD_ZONE] : 0.5,
            [GamepadThumbstick.HORIZONTAL_AXE_ID] : 0,
            [GamepadThumbstick.VERTICAL_AXE_ID] : 1,

            [Control.LEFT]: 14,
            [Control.RIGHT]: 15,
            [Control.UP]: 12,
            [Control.DOWN]: 13,
            [Control.LIGHT_PUNCH]: 2,
            [Control.MEDIUM_PUNCH]: 3,
            [Control.HEAVY_PUNCH]: 5,
            [Control.LIGHT_KICK]: 0,  
            [Control.MEDIUM_KICK]: 1,  
            [Control.HEAVY_KICK]: 4,
            
         },
        keyboard: {
            [Control.LEFT]: "KeyA",
            [Control.RIGHT]: "KeyD",
            [Control.UP]: "KeyW",
            [Control.DOWN]: "KeyS",
            [Control.LIGHT_PUNCH]: "KeyQ",  
            [Control.MEDIUM_PUNCH]: "KeyE",
            [Control.HEAVY_PUNCH]: "KeyR",  
            [Control.LIGHT_KICK]: "KeyF",  
            [Control.MEDIUM_KICK]: "KeyT",  
            [Control.HEAVY_KICK]: "KeyG",                 
        }
    },
    {   
        gamePad: {
            [GamepadThumbstick.DEAD_ZONE] : 0.5,
            [GamepadThumbstick.HORIZONTAL_AXE_ID] : 0,
            [GamepadThumbstick.VERTICAL_AXE_ID] : 1,

            [Control.LEFT]: 14,
            [Control.RIGHT]: 15,
            [Control.UP]: 12,
            [Control.DOWN]: 13,
            [Control.LIGHT_PUNCH]: 2,
            [Control.MEDIUM_PUNCH]: 3,
            [Control.HEAVY_PUNCH]: 5,
            [Control.LIGHT_KICK]: 0,  
            [Control.MEDIUM_KICK]: 1,  
            [Control.HEAVY_KICK]: 4,
         },
        keyboard: {
            [Control.LEFT]: "ArrowLeft",
            [Control.RIGHT]: "ArrowRight",
            [Control.UP]: "ArrowUp",
            [Control.DOWN]: "ArrowDown",
            [Control.LIGHT_PUNCH]: "KeyL",
            [Control.MEDIUM_PUNCH]: "KeyO",
            [Control.HEAVY_PUNCH]: "KeyP",
            [Control.LIGHT_KICK]: "KeyI",  
            [Control.MEDIUM_KICK]: "KeyK",  
            [Control.HEAVY_KICK]: "KeyM",
        }
    }
]
