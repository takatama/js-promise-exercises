var methodA = function (chain) {
    return Promise.resolve(chain + ' -> methodA');
};

var methodB = function (chain) {
    return Promise.resolve(chain + ' -> methodB');
};

var methodC = function (chain) {
    return Promise.resolve(chain + ' -> methodC');
};

exports.abc = function (chain) {
    return methodA(chain).then(function (resultA) {
        return methodB(resultA);
    }).then(function (resultB) {
        return methodC(resultB);
    }).then(function (resultC) {
        return Promise.resolve(resultC);
    });
};

var sleep = function (millisec, result) { // Argument 'result' is needed for delivering to the next promise.
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(result)
        }, millisec);
    });
};

exports.abcWithSleep = function (chain, millisec) {
    return sleep(millisec).then(function () {
        return methodA(chain);
    }).then(function (resultA) {
        return sleep(millisec, resultA);
    }).then(function (resultA) {
        return methodB(resultA);
    }).then(function (resultB) {
        return sleep(millisec, resultB);
    }).then(function (resultB) {
        return methodC(resultB);
    }).then(function (resultC) {
        return Promise.resolve(resultC);
    });
};
