const reducerInfo=(state={},action)=>{

    switch(action.type){
        case 'INCREMENT':
        state.counter++;
        return state;

        case 'DECREMENT':
        if(state.counter>0){
            state.couter--;
        }
       console.log(state.counter);
        return state;

        default:
        return state;
    }

}

export default reducerInfo;