import * as firebase from 'firebase'


export const authenticate = () => (dispatch) =>{
    dispatch({
        type:"AUTHENTICATE",
    })
}

export const userid = (id)=> (dispatch)=>{
    dispatch({
        type:'USERID',
        payload:id
    })
}

export const username = (id) => async (dispatch)=>{
    if(id)
    {
    firebase
    .database()
    .ref(`Todo/${id}` )
    .on('value', (snapshot)=>{
        dispatch({
            type:'USERNAME',
            payload:snapshot.val().usernameInput
        })
    })
}
}