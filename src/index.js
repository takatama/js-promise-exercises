var methodA = function (result, func) {
    if (func) {
        func(result + ' -> methodA');
    }
};

var methodB = function (result, func) {
    if (func) {
        func(result + ' -> methodB');
    }
};

var methodC = function (result, func) {
    if (func) {
        func(result + ' -> methodC');
    }
};

exports.callbackHell = function (start, func) {
    methodA(start, function (a) {
        methodB(a, function (b) {
            methodC(b, function (c) {
                func(c);
           });
        });
    });
};

var promisifiedMethodA = function (result) {
    return Promise.resolve(result + ' -> methodA');
};

var promisifiedMethodB = function (result) {
    return Promise.resolve(result + ' -> methodB');
};

var promisifiedMethodC = function (result) {
    return Promise.resolve(result + ' -> methodC');
};

exports.promisifiedCallbackHell = function (start) {
    return promisifiedMethodA(start).then(function (a) {
        return promisifiedMethodB(a);
    }).then(function (b) {
        return promisifiedMethodC(b);
    }).then(function (c) {
        return Promise.resolve(c);
    });
}
