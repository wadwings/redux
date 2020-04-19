count = 0;
patch = new Object();
tmp = 0;

function createElement(tag, props, children, key) {
    vdom = new Object();
    vdom.tag = tag;
    vdom.props = props;
    vdom.children = children;
    if (key)
        vdom.key = key;
    return vdom;
}

vdom1 = createElement("div", {}, [
    createElement("p", {}, ["hello world"]),
    createElement("p", {}, ["hello world"]),
    createElement("p", {}, ["hello world"]),
    createElement("p", {}, ["hello world"]),
    createElement("ul", {}, [
        createElement("li", {}, ["hello1"], 'A'),
        createElement("li", {}, ["hello2"], 'B'),
        createElement("li", {}, ["hello3"], 'C'),
        createElement("li", {}, ["hello4"], 'D')
    ])
]);

vdom2 = createElement(
    "div", {style: "position: relative; top: 0"}, [
        createElement(
            "p", {
                style: "position: relative; top: 0",
            },
            [
                createElement("p", {}, ["hello world1"]),
                createElement(
                    "p", {
                        style: "position: relative; top: 0",
                    },
                    ["hello world2"]
                ),
                createElement("p", {}, ["hello world3"]),
            ]
        ),
        createElement(
            "p", {
                style: "position: relative; top: 0",
            },
            ["hello world1"]
        ),
        createElement(
            "p", {
                style: "position: relative; top: 0",
            },
            ["hello world2"]
        ),
        createElement(
            "p", {
                style: "position: relative; top: 0",
            },
            ["hello world3"]
        ),
        createElement("ul", {}, [
            createElement("li", {}, ["hello3"], 'C'),
            createElement("li", {}, ["hello1"], 'A'),
            createElement("li", {}, ["hello4"], 'D'),
            createElement("li", {}, ["hello5"], 'E')
        ])
]);

function isObjectValueEqual(a, b) {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    if (aProps.length != bProps.length) {
        return false;
    }
    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        var propA = a[propName];
        var propB = b[propName];
        if (typeof propA === "object") {
            if (this.isObjectValueEqual(propA, propB)) {} else {
                return false;
            }
        } else if (propA !== propB) {
            return false;
        } else {}
    }
    return true;
}

function remove_id(id) {
    var div = document.getElementById(id);
    while (
        div.hasChildNodes() //当div下还存在子节点时 循环继续
    )
        div.removeChild(div.firstChild);
    return div;
}

function render_id(vdom, id) {
    var div = remove_id(id);
    div.appendChild(render(vdom));
}

function render(node) {
    var ele = document.createElement(node["tag"]);
    for (let i in node["props"]) ele.setAttribute(i, node["props"][i]);
    for (let i in node["children"])
        if (typeof node["children"][i] == "string"){
            if(ele.innerHTML == '')
                ele.innerHTML = node["children"][i];
            else
                ele.innerHTML += node["children"][i];
        }
        else
            ele.appendChild(render(node["children"][i]));
    return ele;
}

function diff(oldNode, newNode) {
    count = 0;
    diffnode(oldNode, newNode);
}

function listdiff(oldList, newList){
    var patch = {
        type: "RELIST",
        moves: {}
    }
    var ol = key(oldList);
    var nl = key(newList);
    for(let i = 0; i < ol.length; i++){
        if(nl.indexOf(ol[i]) == -1){
            if(patch.moves.remove)
                patch.moves.remove.push(ol[i]);
            else
                patch.moves.remove = [ol[i]];
        }//remove list
    }
    for(let i = 0; i < nl.length; i++){
        if(nl[i] != ol[i] && ol.indexOf(nl[i]) != -1){
            if(patch.moves.replace)
                patch.moves.replace.push({key: nl[i], index: i});
            else
                patch.moves.replace = [{key: nl[i], index: i}];
        }
        else if(nl[i] != ol[i] && ol.indexOf(nl[i]) == -1){
            if(patch.moves.insert)
                patch.moves.insert.push({index: i, node: newList[i]});
            else
                patch.moves.insert = [{index: i, node: newList[i]}];
        }
    }
    if(!isObjectValueEqual(patch.moves, {}))
        return patch;
}

function key(list){
    var li = new Array();
    for (let i = 0; i < list.length; i++)
        li.push(list[i].key);
    return li;
}
function diffnode(oldNode, newNode) {
    var temp = ++count;
    patch[temp] = new Array();
    if (oldNode["tag"] != newNode["tag"])
        patch[temp].push({
            type: "TAG",
            tag: newNode["tag"],
        });
    if (!isObjectValueEqual(oldNode["props"], newNode["props"]))
        patch[temp].push({
            type: "PROPS",
            attr: newNode["props"],
        });
    if (
        typeof oldNode["children"][0] == "string" &&
        typeof newNode["children"][0] == "string"
    ) {
        if (oldNode["children"][0] != newNode["children"][0])
            patch[temp].push({
                type: "TEXT",
                content: newNode["children"],
            });
    } else {
        if (
            typeof oldNode["children"][0] != typeof newNode["children"][0] ||
            oldNode["children"].length != newNode["children"].length
        )
            patch[temp].push({
                type: "REORDER",
                node: newNode["children"],
            });
        else if(oldNode["children"][0].key){
            patch[temp].push(listdiff(oldNode["children"], newNode["children"]));
        }
        else{
            for (let i = 0; i < oldNode["children"].length; i++)
                diffnode(oldNode["children"][i], newNode["children"][i]);
        }
    }
    if (patch[temp].length == 0) delete patch[temp];
    return;
}

function dfswalker(vdom, walker, patch) {
    if (typeof(patch[walker.index]) != "undefined")
        var curPatch = patch[walker.index];
    var len =
        typeof vdom["children"][0] == "object" ? vdom["children"].length : 0;
    for (let i = 0; i < len; i++) {
        walker.index++;
        dfswalker(vdom["children"][i], walker, patch);
    }
    if (curPatch) {
        applyPatch(vdom, curPatch);
    }
    return vdom;
}

function patcher(vdom, patch) {
    walker = {
        index: 1,
    };
    return dfswalker(vdom, walker, patch);
}

function applyPatch(vdom, patch) {
    for (let i = 0; i < patch.length; i++) {
        switch (patch[i].type) {
            case "TAG":
                vdom.tag = patch[i].tag;
                break;
            case "PROPS":
                vdom.props = patch[i].attr;
                break;
            case "TEXT":
                vdom.children = patch[i].content;
                break;
            case "REORDER":
                vdom.children = patch[i].node;
                break;
            case "RELIST":
                var temp = vdom.children.concat();
                for(let index = 0; index < vdom.children.length; index++){
                    if(patch[i].moves.remove.indexOf(vdom.children[index].key) != -1)
                        vdom.children.splice(index--, 1);
                }
                for(let index = 0; index < patch[i].moves.replace.length; index++){
                    vdom.children.splice(patch[i].moves.replace[index].index, 1, findKey(temp, patch[i].moves.replace[index].key));
                }
                for(let index = 0; index < patch[i].moves.insert.length; index++)
                    vdom.children.splice(patch[i].moves.insert[index].index, 1, patch[i].moves.insert[index].node);
                break;
        }
    }
}

function findKey(list, key){
    for (let i = 0; i < list.length; i++)
        if(list[i].key == key)
            return list[i];
    return {warning: 1};
}


