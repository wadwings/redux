count = 0;
patch = new Object();
tmp = 0;

function createElement(tag, props, children) {
    vdom = new Object();
    vdom.tag = tag;
    vdom.props = props;
    vdom.children = children;
    return vdom;
}

vdom1 = createElement("div", {}, [
    createElement("p", {}, ["hello world"]),
    createElement("p", {}, ["hello world"]),
    createElement("p", {}, ["hello world"]),
    createElement("p", {}, ["hello world"]),
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
    if (typeof node["children"][0] == "string")
        ele.innerHTML = node["children"][0];
    else
        for (let i in node["children"])
            ele.appendChild(render(node["children"][i]));
    return ele;
}

function diff(oldNode, newNode) {
    count = 0;
    diffnode(oldNode, newNode);
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
        else {
            for (let i = 0; i < oldNode["children"].length; i++)
                diffnode(oldNode["children"][i], newNode["children"][i]);
        }
    }
    if (patch[temp].length == 0) delete patch[temp];
    return;
}

function dfswalker(vdom, walker, patch) {
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
}

function patcher(vdom, patch) {
    const walker = {
        index: 1,
    };
    dfswalker(vdom, walker, patch);
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
        }
    }
}