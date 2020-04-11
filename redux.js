function combineReducer(state, action){
    return{
        event1 : process1(state.p1, action),
        event2 : process2(state.p2, action),
        event3 : process3(state.p3, action)
    }
}

class Store {
    constructor(reducer, initState){
        this.reducer = reducer;
        this.state = initState;
    }
    listeners = [];
    getState(){
        return this.state;
    }
    dispatch(action){
        this.state = this.reducer(this.state, action);
        this.listeners.foreach(v=>v());
    }
    subscribe(handler){
        this.listeners.push(handler);
    }
    unsubscribe(handler){
        for(let i = 0; i < this.listeners.length; i++)
            if(this.listeners[i] == handler)
                this.listeners.splice(i, 1);
    }
    replaceReducer(newReducer){
        this.reducer = newReducer;
    }
}

var store = new Store()