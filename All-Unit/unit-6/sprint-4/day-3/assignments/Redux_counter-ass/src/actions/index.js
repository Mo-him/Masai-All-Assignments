export const incrementCount = (num)=>{
    return{
        type : "INCREMENT",
        payload : num
    }
}

export const decrementCount = (num)=>{
    return{
        type : "DECREMENT",
        payload : num
    }
}