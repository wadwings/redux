class EventCenter{
    listeners = {};
    listenOnce = {};
    subscribe = function(type, callback){
        if(this.listeners[type])
            this.listeners[type].push(callback);
        else
            this.listeners[type] = [callback];
    }
    subscribeOnce = function(type, callback){
        if(this.listenOnce[type])
            this.listenOnce[type].push(callback);
        else
            this.listenOnce[type] = [callback];
    }
    publish = function(type, ...args){
        if(this.listeners[type])
            for(let i = 0; i < this.listeners[type].length; i++)
                this.listeners[type][i](...args);
        if(this.listenOnce[type])
            for(let i = 0; i < this.listenOnce[type].length; i++){
                this.listenOnce[type][i](...args);
                this.listenOnce.splice(this.listenOnce[type].indexOf(this.listenOnce[type][i]), 1);
                if(this.listenOnce[type].length)
                    delete this.listenOnce[type];
        }
    }
    unsubscribe = function(type, callback){
        if(this.listeners[type]){
            this.listeners[type].splice(this.listeners[type].indexOf(callback), 1);
            if(!this.listeners[type].length)
                delete this.listeners[type];
        }
        if(this.listenOnce[type]){
            this.listenOnce.splice(this.listenOnce[type].indexOf(callback), 1);
            if(!this.listenOnce[type].length)
                delete this.listenOnce[type];
        }
    }
    unsubscribeAll = function(type){
        delete this.listeners[type];
        delete this.listenOnce[type];
    }
}


const a = new EventCenter();
const foo = () => console.log("call foo()");
const bar = (name) => console.log(`hello ${name}`);
const qaq = (msg) => console.log(msg);

a.subscribe("foo", foo);
a.subscribe("test", bar);
a.subscribe("test", qaq);

a.publish("foo");
a.publish("test", "hhh");

a.unsubscribe("test", qaq);
a.publish("test", "???");