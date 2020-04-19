var todolist = new Object();
var store = uniquedux.createStore(rootReducer);
function rootReducer(state, action){
    if(!state)
        return {};
    else
        return producer(state, action);
}

function producer(state, action){
    return {usage: 100, number: 21312}
}

const input = document.getElementById('input');
input.bind('keyup', function(event){
    if(event.keyCode == "13"){
        add_todo(input.value);
        input.value = "";
    }
})

function add_todo(value){

}