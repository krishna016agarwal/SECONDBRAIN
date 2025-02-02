import { createContext, useContext, useReducer } from "react";

import reducer from "../components/reducer"

 const DataContext=createContext();



const intialState={
    data:[]
}







 const DataProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer,intialState)


    const addToHome=(data)=>{
        dispatch({ type: "ADD_TO_HOME", payload: { data} });
    }

  


   

   return <DataContext.Provider value={{...state,addToHome}} >{children}</DataContext.Provider> 
}
const useDataContext=()=>{
    return useContext(DataContext)
}


export {DataProvider,DataContext,useDataContext}