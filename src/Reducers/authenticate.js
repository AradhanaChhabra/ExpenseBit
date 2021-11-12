/* reducer to manage authentication state */

const authenticate = (initialState=false,action)=>{

    switch(action.type){
        case "AUTHENTICATE":{
            return initialState=!initialState
        }
        default:{
            return initialState
        }
    }

}

export default authenticate;