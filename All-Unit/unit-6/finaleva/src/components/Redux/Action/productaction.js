export const productAction=(data,dispatch)=>{
    dispatch({
        type:"addProd",
        payload:data,
    })
}