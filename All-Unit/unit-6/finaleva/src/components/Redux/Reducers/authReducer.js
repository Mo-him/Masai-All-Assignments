var initalData ={
    isAuth:false,
    token:"",
}

export const authReducer=(authData=initalData, action)=>{
    switch(action.type){
        case "USERS": {

        }
        default:{
            return authData;
        }
    }
}