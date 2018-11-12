var Zepto = (function () {
    var undefined, key, $, classList, emptyArray = [], 

    //返回数组原型上的方法用于类数组元素，比如arguments
    slice = emptyArray.slice, fliter = emptyArray.filter

    document = window.document
})();

window.Zepto = Zepto;
window.$ === undefined && (window.$ = Zepto);