/* reducer to manage user id state */

const userid = (initialState="",action)=>{

    switch(action.type){
        case "USERID":{
            return initialState=action.payload
        }
        default:{
            return initialState
        }
    }

}

export default userid;