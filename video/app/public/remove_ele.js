module.exports = function(_element){
    var _parentElement = _element.parentNode;
    if(_parentElement){
    _parentElement.removeChild(_element);
    }
}