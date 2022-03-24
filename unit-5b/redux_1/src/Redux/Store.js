import { createStore } from "redux";

import { reducer } from "./reducer";

const loggerMiddleware = (store)=>(next)=>(action)=>{
    console.time("t1")
    next(action);
}

export const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  
);
