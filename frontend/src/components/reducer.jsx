const DataReducer = (state,action)=>{

if(action.type==="ADD_TO_HOME"){
    let {data}=action.payload

 
let dataStore;
dataStore={
    id:data.title,
    title:data.title,
    item:data.question
}
  return {
    ...state,data:[...state.data,dataStore]

  }
    
}
return state;
}
export default DataReducer;