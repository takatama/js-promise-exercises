var methodA = function (chain, func) {
    if (func) {
        func(chain + ' -> methodA');
    }
};

var methodB = function (chain, func) {
    if (func) {
        func(chain + ' -> methodB');
    }
};

var methodC = function (chain, func) {
    if (func) {
        func(chain + ' -> methodC');
    }
};

exports.abc = function (chain, func) {
    methodA(chain, function (resultA) {
        methodB(resultA, function (resultB) {
            methodC(resultB, function (resultC) {
                func(resultC);
           });
        });
    });
};
