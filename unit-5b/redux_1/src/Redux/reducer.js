import { ADD_COUNT } from "./actions";
import { ADD_TODO } from "./actions";
const initState = {
    count : 0,
    todo : [],
}
export const reducer = (store = initState,{ type, payload }) =>{
    
switch(type){
    case ADD_COUNT:
        return {...store,count:store.count + payload};
        // case SUB_COUNT:
        //     return {...store,count:store.count-payload}
        case ADD_TODO :
            return {...store,todo : [...store.todo, payload]}
        default:
            return store
}
}