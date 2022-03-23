

export const ADD_COUNT = "ADD_COUNT"
export const ADD_TODO = "ADD_TODO"
export const addCount = (payload)=>({type:ADD_COUNT, payload})
export const addtodo = (todo)=>({type: ADD_TODO, payload : todo})