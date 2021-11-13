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

export const logs = (id) => async (dispatch)=>{
    if(id)
    {
    firebase
    .database()
    .ref(`expense/${id}` )
    .on('value', (snapshot)=>{
        dispatch({
            type:'LOGS',
            payload:snapshot.val()
        })
    })
}
}


export const expense = (data,tranID,uid) => async (dispatch)=>{

    firebase.database().ref(`/expense/`).child(uid).child(tranID)
            .set({
                data
            })

}