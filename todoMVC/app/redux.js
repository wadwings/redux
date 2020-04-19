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
    listeners = new Array();
    getState(){
        return this.state;
    }
    dispatch(action){
        this.state = this.reducer(this.state, action);
        for(var i in this.listeners)
            this.listeners[i]();
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

const uniquedux = {
    createStore: function(reducer){
        var tmp = new Store(reducer, reducer());
        return tmp;
    }
}

function hello(){
    document.write('hello');
}
module.exports = hello;