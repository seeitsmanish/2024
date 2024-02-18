const obj = {
    a : 'a',
    b : 'b',
    c: function(d,e,f){
        console.log(this.a + " " + this.b + " " + d + " "  + e + " " + f) 
    }
}

let c = obj.c;

Function.prototype.Call = function(context, ...args) {
    const callSymbol = Symbol('callSymbol')
    context.callSymbol = this
    context.callSymbol(...args);
}

Function.prototype.Apply = function(context, params) {
    const applySymbol = Symbol('applySymbol')
    context.applySymbol = this
    context.applySymbol(...params);
}

Function.prototype.Bind = function(context){
    const bindSymbol = Symbol('bindSymbol')
    context.bindSymbol = this;
    return function(...args) {
        context.bindSymbol(...args);
    }
}

c.Call(obj,"d", "e", "f")
c.Apply(obj, ['d','e','f'])
const d = c.Bind(obj)
d("d","e","f")
