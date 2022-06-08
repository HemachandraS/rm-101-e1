
const init={
   todo:[], 
}

export const TodoReducer=(store1=init,{type,payload})=>{
    switch(type){
        case Load:return{...store,todo:[]}
        default:
            return store1;
    }
}








