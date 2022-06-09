import { createContext, useState } from "react";
import info from  '../data/tasks.json'


export const storeData= createContext()
export const StoreDataProvider = ({children})=>{
    const [flowData,setFloeData]=useState(info)
    function deleteData(pra){
        let data = flowData.filter((el)=>el.id!=pra)
        setFloeData([...data])
    }
    function addData(pra){
       
        setFloeData([...flowData,pra])
    }
  return <storeData.Provider value={{flowData,deleteData,addData}}>{children}</storeData.Provider>
}