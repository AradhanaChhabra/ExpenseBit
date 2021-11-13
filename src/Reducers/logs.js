/* reducer to manage logs state */

const logs = (initialState={},action)=>{

    switch(action.type){
        case "LOGS":{
            return initialState=action.payload
        }
        default:{
            return initialState
        }
    }

}

export default logs;