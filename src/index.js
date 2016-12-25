var methodA = function (func) {
    if (func) {
        func('methodA');
    }
};

var methodB = function (func) {
    if (func) {
        func('methodB');
    }
};

var methodC = function (func) {
    if (func) {
        func('methodC');
    }
};

exports.callbackHell = function (func) {
    methodA(function (a) {
        methodB(function (b) {
            methodC(function (c) {
                func(a + ' -> ' + b + ' -> ' + c);
           });
        });
    });
};

