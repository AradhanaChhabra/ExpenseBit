/* reducer to manage user id state */

const username = (initialState="",action)=>{

    switch(action.type){
        case "USERNAME":{
            return initialState=action.payload
        }
        default:{
            return initialState
        }
    }

}

export default username;