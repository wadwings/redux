var todolist = new Object();
var store = uniquedux.createStore(rootReducer);
var total = 0;

function rootReducer(state, action){
    if(!state)
        return {};
    if(action){
        switch(action.type){
            case "ADD":
                if(action.value != ''){
                    total++;
                    state[new Date() %10000000] = {
                        name: action.name,
                        state: "active"
                    }
                }
                break;
            case "DELETE":
                delete state[action.name];
                total--;
                break;
            case "CLEAR":
                for(var i in state){
                    if (state[i].state == "completed"){
                        delete state[i];
                    }
                }
                break;
            case "COMPLETED":
                if(state[action.name].state == "completed"){
                    state[action.name].state = "active";
                    console.log(state[action.name].state);
                    total++;
                }else{
                    state[action.name].state = "completed";
                    console.log(state[action.name].state);
                    total--;
                }
                break;
            case "COMPALL":
                let point = false;
                for(var i in state)
                    if(state[i].state == "active"){
                        point = true;
                        break;
                    }
                total = 0;
                if(point)
                    for(var i in state)
                        state[i].state = "completed";
                else{
                    for(var i in state){
                        state[i].state = "active";
                        total++;
                    }
                total--;
                }
                break;
            case "INV_ALL":
                state.inv = "all";
                break;
            case "INV_ACTIVE":
                state.inv = "active";
                break;
            case "INV_COMP":
                state.inv = "comp";
                break;
        }
    }
    return state;
}

function rebuild(){
    var state = store.getState();
    var newNode = createElement("div", {}, []);
    var flag = false;
    var count = 0;
    for(var i in state){
        if((state.inv == "all" || state.inv == "comp") && state[i].state == "completed"){
            flag = true;
            newNode.children.push(createElement("div", {class: "items " + state[i].state}, [
            createElement("input", {class: "com", name: i}, []),
            createElement("p", {}, [state[i].name]),
            createElement("button", {class: "delete", name: i}, ["X"])
        ]))}
        else if((state.inv == "all" || state.inv == "active") && state[i].state == "active"){
            newNode.children.push(createElement("div", {class: "items " + state[i].state}, [
                createElement("input", {class: "com", name: i}, []),
                createElement("p", {}, [state[i].name]),
                createElement("button", {class: "delete", name: i}, ["X"])
            ]))
        }
        count++;
    }
    if(count != 1)
        if(flag)
            newNode.children.push(createElement("footer", {class: "cal"}, [
                createElement("p", {}, [total + " items left"]),
                createElement("div", {}, [
                    createElement("button", {id: "All"}, ["All"]),
                    createElement("button", {id: "Active"}, ["Active"]),
                    createElement("button", {id: "Completed"}, ["completed"])
                ]),
                createElement("a", {id: "clear"}, ["Clear completed"])
            ]));
        else
            newNode.children.push(createElement("footer", {class: "cal"}, [
                createElement("p", {}, [total + " items left"]),
                createElement("div", {}, [
                    createElement("button", {id: "All"}, ["All"]),
                    createElement("button", {id: "Active"}, ["Active"]),
                    createElement("button", {id: "Completed"}, ["completed"])
                ])
            ]));
    if(isObjectValueEqual(todolist, {}))
        todolist = newNode;
    else{
        var patch121 = diff(todolist, newNode);
        if(patch121){
            patcher(todolist, patch121);
        }
    }
    render_id(todolist, "mana");
}

function init_delete(){
    var button = document.getElementsByClassName('delete');
    for(var i = 0;i < button.length; i++){
        let tmp = button[i].name;
        button[i].addEventListener('click', function () {
            store.dispatch({ type: 'DELETE', name: tmp});
        })
    }
}

function init_complete(){
    var comp = document.getElementsByClassName('com');
    for(var i = 0; i < comp.length; i++){
        let tmp = comp[i].name;
        comp[i].addEventListener('click', function () {
            store.dispatch({ type: 'COMPLETED', name: tmp});
        })
    }
}

function init_clear(){
    var clear = document.getElementById("clear");
    if(clear)
    clear.addEventListener('click', function(){
        store.dispatch({type: 'CLEAR'});
    })
}

function init_all(){
    var all = document.getElementById('All');
    if(all)
    all.addEventListener('click', function(){
        store.dispatch({type: 'INV_ALL'});
    })
    if(store.state.inv == "all")
        all.className = "seleted";
}

function init_active(){
    var active = document.getElementById('Active');
    if(active)
    active.addEventListener('click', function(){
        store.dispatch({type: 'INV_ACTIVE'});
    })
    if(store.state.inv == "active")
    active.className = "seleted";
}

function init_completeall(){
    var label = document.getElementsByClassName('label')[0];
    if(label)
    label.addEventListener('click', function(){
        store.dispatch({type: "COMPALL"});
    })
}
init_completeall();
function init_comp(){
    var comp = document.getElementById('Completed');
    if(comp)
    comp.addEventListener('click', function(){
        store.dispatch({type: 'INV_COMP'});
    })
    if(store.state.inv == "comp")
    comp.className = "seleted";
}

var input = document.getElementById('input');
input.onkeydown = function (event){
    var e = event || window.event;
    if(e && e.keyCode == 13){
        let tmp = input.value;
        input.value = "";
        add_todo(tmp);
    }
}

function add_todo(value){
    store.dispatch({type: "ADD", name: value});
}

function isEmpty(obj){
    if(typeof obj == "undefined" || obj == null || obj == ""){
        return true;
    }else{
        return false;
    }
}
store.subscribe(rebuild);
store.subscribe(init_delete);
store.subscribe(init_complete);
store.subscribe(init_clear);
store.subscribe(init_all);
store.subscribe(init_active);
store.subscribe(init_comp);
store.state.inv = "all";